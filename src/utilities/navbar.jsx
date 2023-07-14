import React from "react";
const SignupNavbar = () => { 
    return(
    <>
        <div className="signup-navbar w-full flex justify-between items-center pt-[4px] pl-[34px] pr-[58px] ">
        <img src="../public/imgs/logo.png" alt="Logo" className=" w-[210px] " />
        <button className="text-[19px] font-[600] hover:decoration-solid text-[#333333]">Sign in</button>
        </div>
    </>
    )
}
export default SignupNavbar