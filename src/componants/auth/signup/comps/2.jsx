import React, { useRef, useState } from "react";
import SignupNavbar from "../../../../utilities/navbar";
import Signupfooter from "../../../../utilities/footer";
import { useEffect } from "react";
import {TbCircleX} from 'react-icons/tb'
import { Link } from "react-router-dom";
const SignUp2_3 = () => {
    let email = useRef()
    let password = useRef()
    const [emailstatus,setemailstatus] = useState(false)
    const [passwordstatus,setpasswordstatus] = useState(false)
    const [loginstatus,setloginstatus] = useState(false)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    useEffect(()=>{
        let signup_email = document.getElementById('signup-email')
        let signup_email_text = document.getElementById('signup-email-text')
        let signup_password = document.getElementById('signup-password')
        let signup_password_text = document.getElementById('signup-password-text')
        if(signup_email.value != "") {signup_email_text.classList.remove('signup-email-1-focus')}
        signup_email.addEventListener('focus', function() {
            signup_email_text.classList.add('signup-email-1-focus')
          });
        signup_email.addEventListener('blur' , () => {
            if(signup_email.value === ''){signup_email_text.classList.remove('signup-email-1-focus');};})
        signup_password.addEventListener('focus', function() {
                signup_password_text.classList.add('signup-email-1-focus')
              });
        signup_password.addEventListener('blur' , () => {
                if(signup_password.value === ''){signup_password_text.classList.remove('signup-email-1-focus');};})
        if(sessionStorage.signup_email!=null){
                    signup_email_text.classList.add('signup-email-1-focus')
                    email.current.value = sessionStorage.signup_email
                    
                }
        
    },[])
    const saveinfos = () => {
        if(emailstatus === true){localStorage.email = email.current.value}
        if(passwordstatus === true){ localStorage.password = password.current.value}
    }
    const checkloginstatus = () => {
        if(isValidEmail(email.current.value)){setemailstatus(true)}
        else (setemailstatus(false))
        if(password.current.value.length >= 4 && password.current.value.length < 60 ) {setpasswordstatus(true)}
        else(setpasswordstatus(false))
    }
    useEffect(() => {
        if (emailstatus && passwordstatus) {
          setloginstatus(true);
        } else {
          setloginstatus(false);
        }
      }, [emailstatus, passwordstatus]);
    return (
        <>
            <SignupNavbar/>
            <div className="w-full flex justify-center mb-[185px] mt-[19px] signup-2-step">
                <div className="flex flex-col items-start w-[440px]">
                <p className="text-[13px]  w-[340px] mt-[20px]">STEP <span className="font-[500]">1</span> OF <span className="font-[500]">3</span></p>
                <p className="font-[500]  text-[32px]  mb-[13px]">Create a password to start your membership</p>
                <p className="text-[18px] mb-[15px]">Just a few more steps and you're done! We hate paperwork, too.</p>
                <div className="mb-2 flex flex-col gap-2">
                    <div className="email-signup-submit-container flex items-center gap-2 relative">
                        <input type="email"  ref ={email} id="signup-email" className="w-[440px] h-[52px] px-4 pt-[20px] pb-[4px] rounded font-[500] bg-white email-signup-form-2 signup-step-2-input" onChange={()=>checkloginstatus()}/>
                        <label htmlFor="signup-email" id="signup-email-text" className="signup-email-signup">E-mail</label>
                    </div>
                    <div className="email-signup-submit-container flex items-center gap-2 relative">
                        <input type="password" ref={password} id="signup-password" className="w-[440px] h-[52px] px-4 pt-[20px] pb-[4px] rounded font-[500] bg-white email-signup-form-2 signup-step-2-input" onChange={()=>checkloginstatus()}/>
                        <label htmlFor="signup-password" id="signup-password-text" className="signup-email-signup">Password</label>
                    </div>
                </div>
                <div className="flex gap-3 mb-5"><input type="checkbox" /><p>Please do not email me Netflix special offers.</p></div>
                {
                    loginstatus? <Link to="../signup"><button className=" px-[48px] w-[440px] h-[65px] bg-[#e50914] text-[24px] text-white rounded" onClick={()=>saveinfos()}>Next</button></Link> : <button className=" px-[48px] w-[440px] h-[65px] bg-[#e50914] text-[24px] text-white rounded" onClick={()=>saveinfos()}>Next</button>
                }
                </div>
            </div>
            <Signupfooter/>
        </>
    )
}
export default SignUp2_3