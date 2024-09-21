import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.less'
import './index.css'; // Adjust path as necessary
import './App.css'
import Loading from "./Components/Loading";
import {ConfigProvider} from "antd";
import i18n from 'i18next';
import {routes} from "./Routes";
import { useTranslation, initReactI18next } from "react-i18next";

import en from "./assets/lang/en.json";
import ar from "./assets/lang/ar.json";
import {LoadingProvider} from "./Context";
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        ar: {
            translation: ar,
        },
    },
    // lng: localStorage.getItem('lang') || 'ar',
    fallbackLng: localStorage.getItem('lang') === "en"? 'ar' : 'en',
    interpolation: {
        escapeValue: false,
    },
});


function App() {
    const renderRoutes = (routes) =>
        routes.map((route, index) => {
            if (route.children) {
                return (
                    <Route key={index} path={route.path} element={route.element}>
                        {renderRoutes(route.children)}
                    </Route>
                );
            }
            return <Route key={index} path={route.path} element={route.element} />;
        });

  return (
    <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <ConfigProvider direction={i18n.dir()}>
                <LoadingProvider>
                    <div dir={i18n.dir()}>
                        {/*<ToastContainer limit={1} />*/}

                        <Routes>{renderRoutes(routes)}</Routes>

                    </div>
                </LoadingProvider>

            </ConfigProvider>
        </Suspense>
    </BrowserRouter>
  )
}

export default App
