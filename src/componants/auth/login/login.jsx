import React, { useEffect } from "react";
import {AiOutlineGlobal} from 'react-icons/ai'
import Select from 'react-select';
import "./login.css"
import { Link } from "react-router-dom";
import logo from "../../../../public/imgs/logo.png"
import bg from "../../../../public/imgs/login-bg.jpg"
function Selectoptions() {
    const options = [
        { value: 'english', label: 'English' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'france', label: 'France' }
      ];
    return (
      <Select
        options={options}
        menuPlacement="top"
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: '#000000',
            border: '1px solid #333333',
            boxShadow: 'none',
            cursor: 'pointer',
            width : "129px",
            height : "48px"

          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#333333',
            backgroundColor : "#000000",
            width : "129px"
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            display : "none"
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: '#333333'
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: "000000",
            color: state.isSelected ? '#ffffff' : '#333333',
            cursor: 'pointer',
            backgroundColor : "#000000",
            width : "129px"
          })
        }}
      />
    );
  }
const Login = () => {
    useEffect(
        ()=>{
            let email = document.getElementById('Login-email')
            let password = document.getElementById('Login-password')
            let email_label = document.getElementById('Login-email-label')
            let password_label = document.getElementById('Login-password-label')
            let errlp = document.getElementById('err-line-password')
            let errle = document.getElementById('err-line-email')
            let errte = document.getElementById('err-text-email')
            let errtp = document.getElementById('err-text-password')
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
              }
              
            email_label.addEventListener('click', function() {
                email.focus()
              });
            email.addEventListener('focus', function() {
                email_label.classList.add('input_focus');
              });
            password_label.addEventListener('click', function() {
                password.focus()
              });
            password.addEventListener('focus', function() {
                password_label.classList.add('input_focus');
              });
            email.addEventListener('blur' , () => {
                if(email.value === ''){email_label.classList.remove('input_focus')}
            })
            /*show the err line if infos not correct */
            email.addEventListener('blur' , () => {
            if(email.value === ''){email_label.classList.remove('input_focus') ; errle.style.display = "inline",errte.style.display = "inline"}
            
        })
        password.addEventListener('blur' , () => {
            if(password.value === ''){password_label.classList.remove('input_focus') ; errlp.style.display = "inline";errtp.style.display = "inline"}
            
        })
        email.addEventListener('blur' , () => {
            if(isValidEmail(email.value)){errle.style.display = "none",errte.style.display = "none"}
            else{errle.style.display = "inline",errte.style.display = "inline"}

        } )
        password.addEventListener('blur' , () => {
            if(password.value.length <= 60 && password.value.length >= 4){errlp.style.display = "none";errtp.style.display = "none"}
            else {errlp.style.display = "inline";errtp.style.display = "inline"}
        } )
        }
        , []
    )
    return (
        <div className="flex flex-col min-h-screen">
        <div className="headerandloginform flex-grow">
        <div className="Login-page-image"><img src={bg} alt="" className="Login-page-image" /></div>
        <div className="header w-full pt-[4px] ">
            <img src={logo} alt="Logo" className=" w-[210px] ml-[34px]" />
        </div>
        <div className="login-form-container flex justify-center items-center bg-red mb-[90px]">
            <div className="login-form bg-[#000000bf] flex flex-col min-w-[380px] min-h-[660px] px-[68px] pt-[50px] pb-[40px] rounded">
                <h1 className="text-white font-[500] text-[32px] mb-[28px]">Sign in</h1>

                <div className="flex flex-col justify-center items-center gap-[15px] mb-[40px]">
                    <div className="login-form-input w-[314px] relative"><input type="text" id="Login-email" className="bg-[#454545] w-full h-[50px] rounded pt-[16px] px-[20px] pb-[6px] outline-none border-none text-white"/>
                    <label for="login-email" className="login-form-label" id="Login-email-label">Email or phone number</label>
                    <div id="err-line-email"></div>
                    <p id="err-text-email">Please enter a valid email or phone number.</p>
                    </div>
                    <div className="login-form-input w-[314px] relative"><input type="password" id ="Login-password" className="bg-[#454545] w-full h-[50px] rounded pt-[16px] px-[20px] pb-[6px] outline-none border-none text-white" />
                    <label for="login-password" className="login-form-label" id="Login-password-label">Password</label>
                    <div id="err-line-password"></div>
                    <p id="err-text-password">Your password must contain between 4 and 60 characters.</p>
                    </div>
                </div>
                <button className=" bg-[#e50914] mb-[10px] font-[600] w-[314px] h-[48px] text-white rounded">Sign in</button>
                <div className="rmmbrme-help flex justify-between items-center w-[314px] mb-[70px]">
                    <span className="flex gap-1 ">
                        <input type="checkbox" className="bg-[#454545] h-4 w-4 outline-none border-none" id="remembre-me"/>
                         <span class="checkmark"></span>
                        <p className=" text-[#b3b3b3] text-[13px]">Rememebre me</p>
                    </span>
                        <p className=" text-[#b3b3b3] text-[13px]">need help ?</p>
                </div>
                <div className="w-[314px] flex flex-col gap-[8px]">
                    <p className="text-[#737373] text-[16px]">New to Netflix? <Link to="/"><span className="text-white font-[400]">Sign up now.</span></Link></p>
                    <p className="text-[#8c8c8c] text-[13px]">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-[#0071eb]">Learn more.</span></p>
                </div>
            </div>
        </div>
        </div>
        <div className="bg-[#000000bf] w-full py-[30px] flex-shrink-0">
        <div className="login-page-footer text-[#737373] text-[13px] flex flex-col gap-7">
            <div><h1 className=" text-[16px]">Questions</h1></div>
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-3">
                    <p>FAQ</p>
                    <p>Cookie Preferences</p>
                    <Selectoptions/>
                </div>
                <div>
                    <p>Help center</p>
                    <p>Corprate Informations</p>
                </div>
                <div>
                    <p>Terms of Use</p>
                </div>
                <div>
                    <p>Privacy</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Login