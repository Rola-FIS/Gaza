import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const BaseLayout = () => {

    return (
        <div className="lg:flex lg:h-screen h-auto ">
            <div className="flex-1 flex flex-col">
                <Header/>
                <main className="flex-1 bg-[#203b51e0]  mt-16 p-10 pt-1 pb-2 flex gap-1">
                    <div className='bg-[#ECF2F7]  pb-32 shadow-lg  lg:h-[100%] flex-1'>
                        <Outlet />
                    </div>
                    <div className='w-9 text-white writing-mode-vertical-lr  font-bold  '>
                        <p className=" text-white  tracking-[30px] "> 7 OCTOBER </p>
                        {/*animate-pulse*/}
                        <p className='p-2 bg-[#203b51e0] w-10 h-12 '>2024</p>

                    </div>


                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default BaseLayout;
