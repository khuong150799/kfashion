//đối với các selector có nhiều phương thức validate thì phải lưu các phương thức đó vào 1 object

//hàm validator xử lý form
function validator(option) {
    //ruleTests để lưu các selector có nhiều phương thức validate
    let ruleTests = {};
    //hàm xử lý tìm element.parent có class selector
    function getParentElemet(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    ///hàm xử lý validate
    function validate(inputElement, rule) {
        const parentEle = getParentElemet(inputElement, option.formgroup);
        const errorElement = parentEle.querySelector(option.formMessage);
        let errorMessage;
        //lấy function test của rule
        const ruleTestsFunction = ruleTests[rule.selector];
        //lặp qua các function test để gán value
        for (var i = 0; i < ruleTestsFunction.length; ++i) {
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    //gán lỗi function test cho errorMessage
                    errorMessage = ruleTestsFunction[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                default:
                    errorMessage = ruleTestsFunction[i](inputElement.value);
            }
            //dùng cho các input muốn sử dụng nhiều validate.nếu có lỗi thì dừng lại ngay
            if (errorMessage) {
                break;
            }
        }
        //kiểm tra và bắt lỗi validate
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            parentEle.classList.add(option.active);
        } else {
            errorElement.innerText = '';
            parentEle.classList.remove(option.active);
        }
        //trả về lỗi để kiểm tra khi submit
        return errorMessage;
    }
    const formElement = document.querySelector(option.form);
    //lấy giá trị khi submit
    if (formElement) {
        // tắt submit mặc định của thẻ form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            for (const rule of option.rules) {
                const inputElement = formElement.querySelector(rule.selector);

                if (!!inputElement) {
                    const isValid = validate(inputElement, rule);
                    if (isValid) {
                        isFormValid = false;
                    }
                }
            }

            if (isFormValid) {
                //trường hợp submit với javascrip
                if (typeof option.onSubmit === 'function') {
                    //lấy tất cả thẻ có atribute là name(thẻ select củng là input nên phải lấy atribute)
                    const enableInput = formElement.querySelectorAll('[name]');
                    //chuyển tất cả các thẻ được chọn từ nostlist về array để thực hiện các hàm như array
                    const formValue = Array.from(enableInput).reduce(function (values, input) {
                        switch (input.type) {
                            case 'radio':
                                const inputCheck = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked',
                                );
                                if (inputCheck) {
                                    values[input.name] = formElement.querySelector(
                                        'input[name="' + input.name + '"]:checked',
                                    ).value;
                                } else {
                                    values[input.name] = '';
                                }

                                break;
                            case 'checkbox':
                                if (input.matches(':checked')) {
                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];
                                    }
                                    values[input.name].push(input.value);
                                }
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    option.onSubmit(formValue);
                    console.log(formValue);
                }
                //trường hợp submit mặc định của trình duyệt
                else {
                    formElement.submit();
                }
            }
        };
        //lặp qua các rules object mà các hàm trả về
        option.rules.forEach(function (rule) {
            //lấy tất cả các function validate
            //phải lưu tất cả các function vào 1 array
            if (Array.isArray(ruleTests[rule.selector])) {
                ruleTests[rule.selector].push(rule.test);
            } else {
                ruleTests[rule.selector] = [rule.test];
            }
            //lấy tất cả thẻ input
            const inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function (inputElement) {
                //khi forcus vào nhưng chưa nhập dử liệu và blur ra ngoài sẽ validate

                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
                //khi nhập dữ liệu vào sẽ xóa validate
                inputElement.oninput = function () {
                    const errorElement = getParentElemet(inputElement, option.formgroup).querySelector(
                        option.formMessage,
                    );
                    errorElement.innerText = '';
                    getParentElemet(inputElement, option.formgroup).classList.remove(option.active);
                };
                inputElement.onchange = function () {
                    validate(inputElement, rule);
                };
            });
        });
    }
}

validator.isRequired = function (selector, message) {
    return {
        selector,
        test: function (value) {
            return value.trim() ? undefined : message;
        },
    };
};
validator.isEmail = function (selector, message) {
    return {
        selector,
        test: function (value) {
            var regex =
                // eslint-disable-next-line no-useless-escape
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regex.test(value) ? undefined : message;
        },
    };
};
validator.isMinLength = function (selector, min, message) {
    return {
        selector,
        test: function (value) {
            return value.length >= min ? undefined : message;
        },
    };
};
validator.isConfirmed = function (selector, message, valuePassWord) {
    return {
        selector,
        test: function (value) {
            return value === valuePassWord() ? undefined : message;
        },
    };
};
validator.isGender = function (selector, message) {
    return {
        selector,
        test: function (value) {
            return value ? undefined : message;
        },
    };
};

export { validator };
