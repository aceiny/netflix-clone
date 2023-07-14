import React from "react";
import SignupNavbar from "../../../../utilities/navbar";
import Signupfooter from "../../../../utilities/footer";
import {AiOutlineCheck} from 'react-icons/ai'
import { Link } from "react-router-dom";
const SignUp3_3 = () => {
    return (
        <>
            <SignupNavbar/>
            <div className="signup-3-content flex flex-col items-center justify-center pt-5 pb-[60px] px-[32px] mt-[84px] text-center mb-[110px]">
                <div className=" h-[90px] py-3 "><img src="../../../public/imgs/Checkmark.png" alt="devices" className="w-[50px] h-[50px]"/></div>
                <p className="text-[13px]  w-[340px] ">STEP <span className="font-[500]">2</span> OF <span className="font-[500]">3</span></p>
                <p className="font-[500]  text-[32px]  w-[340px] mb-[20px]">Choose your plan.</p>
                <div className="text-[18px] w-[290px] mb-[15px] flex items-start justify-start text-start gap-3 "><AiOutlineCheck className="text-[#e50914] text-[32px]"/><p>No commitments, cancel anytime.</p></div>
                <div className="text-[18px] w-[290px] mb-[15px] flex items-start justify-start text-start gap-3 "><AiOutlineCheck className="text-[#e50914] text-[32px]"/><p>Everything on Netflix for one low price.</p></div>
                <div className="text-[18px] w-[290px] flex items-start justify-start text-start gap-3 mb-[42px]"><AiOutlineCheck className="text-[#e50914] text-[32px]"/><p>Unlimited viewing on all your devices.</p></div>
                <Link to="../signup/planform"><button className=" px-[48px] w-[340px] h-[65px] bg-[#e50914] text-[24px] text-white rounded">Next</button></Link>
            </div>
            <Signupfooter/>
        </>
    )
}
export default SignUp3_3