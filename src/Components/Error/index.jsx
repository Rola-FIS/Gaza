import React from "react";
import Image from "./../../assets/images/error.jpg";

export const ErrorComponent = ({error})=>{
    return(
        <div className='lg:h-[100%] -mt-16  bg-white' >
            <div className='lg:h-[100%]' style={{backgroundImage:`url(${Image})`,
            backgroundSize:'100%', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
            <div className='font-bold flex flex-col  p-10 mt-16 text-red-500'>
                <p>Oops!! Something went wrong ,
                    check your connection and try again
                </p>
                <p>{error}</p>
            </div>
            </div>
        </div>

    )
}