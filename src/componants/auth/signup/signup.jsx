import React, { useEffect, useRef, useState } from "react";
import './signup.css'
import {MdArrowForwardIos} from 'react-icons/md'
import {TbCircleX} from 'react-icons/tb'
import {BsPlusLg} from 'react-icons/bs'
import Select from "react-select";
import { Link } from "react-router-dom";
import bg from '../../../../public/imgs/signup-bg.jpg'
import logo from '../../../../public/imgs/logo.png'
import iconfig from '../../../../public/imgs/download-icon.gif'
import tv from "../../../../public/imgs/tv.png"
import mobile from "../../../../public/imgs/mobile-0819.jpg"
import boxshot from "../../../../public/imgs/boxshot.png"
import devicepile from "../../../../public/imgs/device-pile.png"
import lastpic from "../../../../public/imgs/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png"
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
            width : "134px",
            height : "15px"

          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#333333',
            backgroundColor : "#000000",
            width : "134px",
            height : "32px"
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
            width : "134px",
            height : "32px"
          })
        }}
      />
    );
  }
const Signup = () =>   {
    const [emailforsignup,setemailforsignup] = useState(false)
    let email = useRef()
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    useEffect(()=>{
        let signup_email = document.getElementById('signup-email')
        let signup_email_text = document.getElementById('signup-email-text')
        let signup_email_required = document.querySelector('.signup-email-required')
        let signup_email_invalid = document.querySelector('.signup-email-invalid')
        signup_email.addEventListener('focus', function() {
            signup_email_text.classList.add('signup-email-focus')
          });
          signup_email.addEventListener('blur' , () => {
            if(signup_email.value === ''){signup_email_text.classList.remove('signup-email-focus');};})
        signup_email.addEventListener('keyup',()=>{
            if(signup_email.value.length < 4) {signup_email_required.style.display='flex';signup_email.style.border='2px solid red'}
            else{signup_email_required.style.display='none'}
            if(signup_email.value.length >= 4 && !isValidEmail(signup_email.value)){signup_email_invalid.style.display='flex';signup_email.style.border='2px solid red'}
            else if(signup_email.value.length >= 4 && isValidEmail(signup_email.value)){signup_email_invalid.style.display='none';signup_email.style.border='2px solid green'}
            else if(signup_email.value.length < 4) {signup_email_invalid.style.display='none'}
        })
    },[])
    function signupemail(){
        if(isValidEmail(email.current.value)){
        sessionStorage.signup_email = email.current.value
        console.log(email.current.value)
        
    }
    }
    function checkmailifvalidonchange(){
        if(isValidEmail(email.current.value)){
            setemailforsignup(true)
        }
        else{
            setemailforsignup(false)
        }
    }
    return(
        <>
        <div className="signup-top flex flex-col gap-[200px] overflow-hidden">
            <div className="signup-page-image"><div><img src={bg} alt="" className="w-full h-full scale-150 image-singup-background"/></div></div>
            <div className="header flex justify-between px-[8%] items-center">
                <div className="signup-logo">
                    <img src={logo} className="w-[160px]" alt="" />
                </div>
                <div className="signup-rigt-header flex items-center gap-[15px]">
                    <Selectoptions/>
                   <Link to="login"> <button className="w-[75px] h-[27px] py-[4px] px-[16px] bg-[#e50914] text-[14px] font-[500] rounded text-white">Sign in</button></Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[9px] mb-[187px] text-white mt-1 px-8">
                <h1 className="text-[48px] font-[900]">Unlimited movies, TV shows, and more</h1>
                <p className="text-[24px]">Plans now start at USD3.99/month.</p>
                <p className="text-[20px]">Ready to watch? Enter your email to create or restart your membership.</p>
                <span className="email-signup-submit-container flex items-center gap-2 relative">
                    <input type="email" ref={email} onChange={()=>checkmailifvalidonchange()} id="signup-email" className="w-[375.75px] h-[56px] px-4 pt-[24px] pb-[8px] rounded font-[500] bg-[#00000066] border-solid border-2 border-[#737373] email-signup-submit" />
                    <label htmlFor="signup-email" id="signup-email-text" className="signup-email">Email adress</label>
                    <label htmlFor="signup_email" className="signup-email-required"><TbCircleX/>Email is required.</label>
                    <label htmlFor="signup_email" className="signup-email-invalid"><TbCircleX/>Please enter a valid email address.</label>
                    {emailforsignup ?<Link to="signup/registration"><button className="flex items-center bg-[#e50914] h-[56px] w-[201.25px] py-[12px] px-[24px] rounded text-white font-[500] text-[24px] signup-go-button" onClick={()=> signupemail()}>Get Started <MdArrowForwardIos/></button></Link> :<button className="flex items-center bg-[#e50914] h-[56px] w-[201.25px] py-[12px] px-[24px] rounded text-white font-[500] text-[24px] signup-go-button" onClick={()=> signupemail()}>Get Started <MdArrowForwardIos/></button>}
                </span>
            </div>
        </div>
        <div className="signup-second flex justify-between px-[10%] py-[72px] bg-black items-center">
            <div className="text-white max-w-[700px]">
                <h1 className="text-[48px] font-[900]">Enjoy on your TV</h1>
                <p className="text-[24px]">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div>
                <img src={tv} alt="tv" className="w-[100%] max-h-[541.938px]"/>
            </div>
        </div>
        <div className="signup-third flex justify-between px-[10%] py-[72px] bg-black items-center ">
            <div className="relative">
                <img src={mobile} alt="tv" className="min-w-[722px] h-[541.938px]"/>
                <div className="signup-download-offlinemode flex items-center gap-4 px-[12px] py-2 rounded-xl w-[361px] justify-between bg-black download-card">
                    <div className="flex gap-4 items-center"><img src={boxshot} alt="boxshot" className="w-[57px] h-[80px]" />
                    <div className="signup-download-offlinemode-text">
                    <p className=" text-[16px] text-white">Stranger Things</p>
                    <p className=" text-[#0071eb] text-[14px]">Downloading...</p>
                    </div></div>
                    <div>
                        <img src={iconfig} alt="" className="download-offline"/>
                    </div>
                </div>
            </div>
            <div className="text-white max-w-[722.656px]">
                <h1 className="text-[48px] font-[900]">Download your shows to watch offline</h1>
                <p className="text-[24px]">Save your favorites easily and always have something to watch.</p>
            </div>
        </div>
        <div className="signup-forth flex justify-between px-[10%] py-[72px] bg-black items-center">
            <div className="text-white max-w-[700px]">
                <h1 className="text-[48px] font-[900]">Watch everywhere</h1>
                <p className="text-[24px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div>
                <img src={devicepile} alt="tv" className="w-[100%] max-h-[541.938px]"/>
            </div>
        </div>
        <div className="signup-fifth flex justify-between px-[10%] py-[72px] bg-black items-center">
            <div>
                <img src={lastpic} alt="tv" className="w-[722.656px] max-h-[541.938px]"/>
            </div>
            <div className="text-white max-w-[700px]">
                <h1 className="text-[48px] font-[900]">Create profiles for kids</h1>
                <p className="text-[24px]">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
        <div className="signup-last flex flex-col bg-black text-white py-[72px] items-center justify-center gap-[54px]">
            <div className=" flex flex-col items-center gap-2 w-[80%]">
                <h1 className="font-[900px] text-[48px] mb-[7px]">Frequently Asked Questions</h1>
                <div className="w-[100%]"><button className="sign-up-last-sec-button">What is Netflix?<BsPlusLg className="sign-up-last-sec-button-icon"/></button></div>
                <div className="w-[100%]"><button className="sign-up-last-sec-button">How much does Netflix cost?<BsPlusLg className="sign-up-last-sec-button-icon"/></button></div>
                <div className="w-[100%]"><button className="sign-up-last-sec-button">Where can I watch?<BsPlusLg className="sign-up-last-sec-button-icon"/></button></div>
                <div className="w-[100%]"><button className="sign-up-last-sec-button">How do i cancel?<BsPlusLg className="sign-up-last-sec-button-icon"/></button></div>
                <div className="w-[100%]"><button className="sign-up-last-sec-button">What can i watch on Netflix?<BsPlusLg className="sign-up-last-sec-button-icon"/></button></div>
                <div className="w-[100%]"><button className="sign-up-last-sec-button">is Netflix good for kids?<BsPlusLg className="sign-up-last-sec-button-icon"/></button></div>
            </div>
            <div className="flex flex-col gap-4 text-[20px] items-center">
                <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
                <span className="email-signup-submit-container flex items-center gap-2 relative">
                    <input type="email" id="signup-email" className="w-[375.75px] h-[56px] px-4 pt-[24px] pb-[8px] rounded font-[500] bg-[#00000066] border-solid border-2 border-[#737373] email-signup-submit" />
                    <label htmlFor="signup-email" id="signup-email-text" className="signup-email">Email adress</label>
                    <label htmlFor="signup_email" className="signup-email-required"><TbCircleX/>Email is required.</label>
                    <label htmlFor="signup_email" className="signup-email-invalid"><TbCircleX/>Please enter a valid email address.</label>
                    <button className="flex items-center bg-[#e50914] h-[56px] w-[201.25px] py-[12px] px-[24px] rounded text-white font-[500] text-[24px]">Get Started <MdArrowForwardIos/></button>
                </span>
            </div>
        </div>
        <div className="bg-[#000000] w-full py-[30px] flex-shrink-0">
        <div className="px-[10%] text-[#737373] text-[13px] flex flex-col gap-7">
            <div>
                <h1 className=" text-[16px]">Questions</h1>
            </div>
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-3">
                    <p>FAQ</p>
                    <p>Cookie Preferences</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                    <Selectoptions/>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Help center</p>
                    <p>Jobs</p>
                    <p>Corkie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Media Center</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Signup