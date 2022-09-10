let index = 0;

function showSlider(option) {
    const images = document.querySelectorAll(option.images);
    const dots = document.querySelectorAll(option.dots);
    //lưu giá trị trước của index để xét z-index cho img trước đó.
    //img trước đó phải có z-index cao hơn các img còn lại và nhỏ hơn img tiếp theo
    const prevIndex = { prev: index };
    index += option.i;
    //khi next
    if (index > images.length - 1) index = 0;

    //khi prev
    if (index < 0) index = images.length - 1;

    //xóa tất cả class avtic và z-index của img trước khi thực hiện netx or prev
    for (let i = 0; i < images.length; i++) {
        if (dots[i].classList.contains(option.active)) {
            dots[i].classList.remove(option.active);
        }
        images[i].style = 'z-index: 0';
    }

    //xét z-index và vị trí cho img trước đó khi next và prev
    if (images.length > index && index > 0) {
        if (index > prevIndex.prev) {
            images[index - 1].style = 'z-index: 1';
        } else {
            images[index - 1].style = 'z-index: 0';
        }
        images[index - 1].style.transform = `translateX(-${images[index].offsetLeft}px)`;
    }

    //khi img cuối cùng thì img đầu nằm ở vị trí của img thứ 2
    if (index === images.length - 1) {
        images[0].style.transform = `translateX(${images[1].offsetLeft}px)`;
    }

    if (index === 0) {
        //img1 nằm kế img0
        images[1].style.transform = `translateX(${images[0].offsetLeft}px)`;

        //img cuối cùng đấy sang trái
        images[images.length - 1].style.transform = `translateX(-${
            images[images.length - 1].offsetLeft + images[1].offsetLeft
        }px)`;
        images[index].style = `z-index: ${images.length + 1}`;
        images[index + 1].style = `z-index: ${images.length + 1}`;
        images[index].style.transform = `translateX(${images[index].offsetLeft}px)`;
    }

    if (index !== 0) {
        images[index].style = `z-index: ${images.length + 1}`;
        images[index].style.transform = `translateX(-${images[index].offsetLeft}px)`;
    }
    dots[index].classList.add(option.active);

    //xét z-index và vị trí cho img tiếp theo khi next và prev
    if (0 < index && index < images.length - 1) {
        if (index > prevIndex.prev) {
            images[index + 1].style = 'z-index: 0';
        } else {
            images[index + 1].style = 'z-index: 1';
        }
        images[index + 1].style.transform = `translateX(-${images[index].offsetLeft}px)`;
    }
}

let timeIdBtn;
let timeIdDot;
function showImage(option) {
    //xóa tất cả interval nếu có

    if (timeIdBtn) {
        clearInterval(timeIdBtn);
    }
    if (timeIdDot) {
        clearInterval(timeIdDot);
    }
    showSlider(option);

    //lưu giá trị của i lại
    timeIdBtn = setInterval(() => {
        return showSlider(option);
    }, 3000);
}

function nextPrevDot(option) {
    const images = document.querySelectorAll(option.images);
    const dots = document.querySelectorAll(option.dots);

    //xóa tất cả interval nếu có
    if (timeIdBtn) {
        clearInterval(timeIdBtn);
    }
    if (timeIdDot) {
        clearInterval(timeIdDot);
    }

    //click dot
    const dataIndex = parseInt(option.e.target.dataset.index);
    for (let i = 0; i < images.length; i++) {
        if (dots[i].classList.contains(option.active)) {
            dots[i].classList.remove(option.active);
        }
        images[i].style = 'z-index: 0';
    }

    //lưu index của lần click trước để xét z-index
    //z-index chỉ thua img sẽ click
    const prevIndexDot = { prev: index };
    images[prevIndexDot.prev].style = `z-index: ${images.length}`;

    //gán dataIndex cho index
    index = dataIndex;
    images[index].style = `z-index: ${images.length + 1}`;
    images[index].style.transform = `translateX(-${images[index].offsetLeft}px)`;
    dots[index].classList.add(option.active);
    //lưu giá trị của i lại
    timeIdDot = setInterval(() => {
        return showSlider({ i: 1, images: option.images, dots: option.dots, active: option.active });
    }, 3000);
}

export { showImage, showSlider, nextPrevDot };
