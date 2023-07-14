import React, { useEffect, useRef ,useState} from "react";
import SignupNavbar from "../../../../utilities/navbar";
import Signupfooter from "../../../../utilities/footer";
import {AiOutlineCheck} from 'react-icons/ai'
import { Link } from "react-router-dom";
import PriceCard from "../../../../utilities/pricingCard";
import { Data1,Data2,Data3 } from "./plandata";
const SignupPlan = () => {
    const [plan,setplan] = useState('')
    const [planb,setplanb] = useState(false)
    function toggleBlur(card) {
        const cards = document.querySelectorAll('#one-pricing-card');
        cards.forEach((card) => {
          card.classList.remove('activecard');
          card.querySelector(':first-child').classList.remove('bg-gradient-to-r')
        });
        card.classList.add('activecard');
        card.querySelector(':first-child').classList.add('bg-gradient-to-r')
      }
    useEffect(()=>{
        const cards = document.querySelectorAll('#one-pricing-card')
        cards.forEach((card)=>card.addEventListener('click',()=>{toggleBlur(card)}))
        },[])
    const getPlan = () => {
        const planget = document.querySelector('.activecard');
        if(planget != null ) {localStorage.nplan = plan ; setplan(planget.querySelector('p').textContent); setplanb(true)} 

    }
    return (
        <>
            <SignupNavbar/>
            <div className="w-full flex justify-center mt-[18px]">
                <div className="flex flex-col items-start w-[1028px] plan-pricing-container">
                <p className="text-[13px] mt-[20px]">STEP <span className="font-[500]">1</span> OF <span className="font-[500]">3</span></p>
                <p className="font-[500]  text-[32px] mb-[13px]">Choose the plan that’s right for you</p>
                <div className="flex flex-col item-start gap-1 mb-[20px]">
                <div className="text-[18px] flex items-start justify-start text-start gap-3 "><AiOutlineCheck className="text-[#e50914] text-[32px]"/><p>No commitments, cancel anytime.</p></div>
                <div className="text-[18px]  flex items-start justify-start text-start gap-3 "><AiOutlineCheck className="text-[#e50914] text-[32px]"/><p>Everything on Netflix for one low price.</p></div>
                <div className="text-[18px]  flex items-start justify-start text-start gap-3"><AiOutlineCheck className="text-[#e50914] text-[32px]"/><p>Unlimited viewing on all your devices.</p></div>
                </div>
                <div className="flex justify-between gap-[11px] pricing-cards-plan">
                    <PriceCard name="Premuim" price="9.99" desc = {Data1} gradiant="to-red-600 from-blue-900 " color ="btn-red" oncheckplan ={()=>getPlan()} />
                    <PriceCard name="Standard" price="7.99" desc = {Data2} gradiant="from-blue-900 to-purple-600" color ="btn-purple" oncheckplan ={()=>getPlan()} />
                    <PriceCard name="Basic" price="3.99" desc = {Data3} gradiant="from-blue-900 to-blue-600" color="btn-blue" oncheckplan ={()=>getPlan()} />
                </div>
                <div className=" flex flex-col text-[13px] text-[#737373] gap-[7px] mt-[23px] mb-[17px]">
                    <p>La disponibilité de la HD (720p), de la Full HD (1080p), de l'Ultra HD (4K) et de la HDR dépend de votre connexion Internet et des capacités de l'appareil. Tous les contenus ne sont pas disponibles dans toutes les résolutions. Pour en savoir plus, veuillez consulter nos <span>Conditions d'utilisation.</span></p>
                    <p>Seules les personnes qui vivent avec vous peuvent utiliser votre compte. Regardez Netflix en simultané sur 4 appareils différents avec l'offre Premium, sur 2 avec l'offre Standard, et sur 1 avec l'offre Essentiel.</p>
                </div>
                {
                    planb?<div className="flex justify-center w-full mb-[120px]"> <Link to='../browse'><button onClick={()=>getPlan()} className=" px-[48px] w-[440px] h-[72px] bg-[#e50914] text-[24px] text-white rounded self-center plan-confirme-button">Next</button></Link></div> : <div className="flex justify-center w-full mb-[120px]"><button onClick={()=>getPlan()} className=" px-[48px] w-[440px] h-[72px] bg-[#e50914] text-[24px] text-white rounded self-center plan-confirme-button">Next</button></div>
                }
                
                </div>
            </div>
            <Signupfooter/>
        </>
    )
}
export default SignupPlan