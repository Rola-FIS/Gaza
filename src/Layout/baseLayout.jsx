import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { routes } from "../Routes";
import { useState, useEffect } from "react";
const useRouteKey = () => {
    const location = useLocation();

    const findKey = (routes) => {
        for (const route of routes) {
            if (route.path === location.pathname) {
                return route.key;
            }
            if (route.children) {
                const childKey = findKey(route.children);
                if (childKey) return childKey;
            }
        }
        return null;
    };

    return findKey(routes);
};
const BaseLayout = () => {
    const [withCustom, setWithCustom] = useState(false);

    const key = useRouteKey();
    useEffect(() => {
        setWithCustom(key === 'details');
    }, [key]);


    console.log(key,'key', withCustom)
    return (
        <div className="lg:flex lg:h-screen h-auto">
            <div className="flex-1 flex flex-col">
                <Header />
                <main
                    className={`flex-1 mt-16 p-10 pt-1 pb-2 flex gap-1 ${withCustom ? 'bg-[#f0f0f0]' : 'bg-[#203b51e0]'}`}
                >
                    <div className={`max-w-[96%] shadow-lg lg:h-[100%] flex-1 ${withCustom ? 'custom-details-style' : 'bg-[#ECF2F7]'}`}>
                        <Outlet />
                    </div>
                    <div className='w-9 text-white writing-mode-vertical-lr font-bold'>
                        <p className="text-white tracking-[30px]">7 OCTOBER</p>
                        <p className='p-2 bg-[#203b51e0] w-10 h-12'>2023</p>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
