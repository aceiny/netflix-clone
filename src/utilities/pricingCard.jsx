import React, { useEffect } from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
const PriceCard = ({name,price,color,gradiant,desc,oncheckplan}) => {
    
    return (
        
        <>
            <div id="one-pricing-card" className="one-Price-Card flex flex-col p-[1px] w-[334px]" onClick={()=>oncheckplan()}>
                <div className= {`flex items-center justify-start rounded-t-xl gap-2 py-3 px-[18px]  ${gradiant}`}>
                    <BsFillCheckCircleFill id='pricingcard-icon'  className="pricing-card-icon text-[16px] text-white"/>
                    <div id="price-card-text" className="price-card-text">
                        <p className="text-[18px] font-[600]">{name}</p>
                        <p className="text-[16px] font-[500]">USD{price}/mo</p>
                    </div>
                </div>
                <div className=" rounded-b-xl py-4 px-4 gap-1">
                {desc.map((v,i)=>{
                    if(i===1) {return(<span className="flex items-start gap-3"><BsDot className={` ${color} text-[27px]`}/><p>{v}</p></span>)}
                        return(<span className="flex items-center gap-3"><BsDot className={` ${color} text-[20px]`}/><p>{v}</p></span>)
                    })}
                </div>
            </div>
        </>
    )
}
export default PriceCard