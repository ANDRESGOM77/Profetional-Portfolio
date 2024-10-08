import React from "react";

const LoadingSpinner = () =>{
    return(
    <div className="flex justify-center items-center w-full h-screen bg-primary">
        <svg className="animate-spin h-16 w-16 text-white" xmlns='http//www.w3.org/2000/svg' viewBox="0 0 24 24">
        <defs>
            <linearGradient id="gradient1" x1='0%' x2='100%'>
                <stop offset='0%' stopColor='#fff455' stopOpacity='0'/>
                <stop offset='100%' stopColor='#fff455' stopOpacity='1'/>
            </linearGradient>
        </defs>
            <circle className="opacity-25" cx='12' cy='12' r='10' stroke="url(gradient1)"
                strokeWidth='4' fill="none">

            </circle>
            <path fill="fff455" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
    </div>
    )
}

export default LoadingSpinner;