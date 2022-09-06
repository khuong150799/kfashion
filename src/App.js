import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCallback } from 'react';

import { PublicRouter } from './routes/routes';
import DefaultLayout from './layouts/Components/default/DefaultLayout';

function App() {
    const handleScrollTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    window.addEventListener('beforeunload', handleScrollTop);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {PublicRouter.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
