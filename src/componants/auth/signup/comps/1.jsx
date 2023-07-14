import React from "react";
import SignupNavbar from "../../../../utilities/navbar";
import Signupfooter from "../../../../utilities/footer";
import { Link } from "react-router-dom";
const SignUp1_3 = () => {
    return (
        <>
            <SignupNavbar/>
            <div className="singup-1-step signup-3-content flex flex-col items-center justify-center pt-5 pb-[60px] px-[32px] mt-[100px] text-center mb-[110px]">
                <div className=" h-[90px] py-3 "><img src="../../../public/imgs/Devices.png" alt="devices" className="w-[260px] h-[100%] mb-[20px]"/></div>
                <p className="text-[13px]  w-[340px] mt-[20px]">STEP <span className="font-[500]">1</span> OF <span className="font-[500]">3</span></p>
                <p className="font-[500]  text-[32px]  w-[340px] mb-[13px]">Finish setting up your account</p>
                <p className="text-[18px] w-[290px] mb-[15px]">Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                <Link to="../signup/regform"><button className=" px-[48px] w-[340px] h-[65px] bg-[#e50914] text-[24px] text-white rounded">Next</button></Link>
            </div>
            <Signupfooter/>
        </>
    )
}
export default SignUp1_3