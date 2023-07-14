import React from "react";
import BrowseNavBar from "../../utilities/browsnavbar";
import {FaPlay,FaExclamationCircle} from 'react-icons/fa'
import Genre from "../../utilities/browsmaintype";
import OneCard from "../../utilities/browsemoviecard";
import img from "../../../public/imgs/browsmainimg.webp"
const MainBrows = () => { 
    return(
        <>
            <div>
                <img src={img} alt="" className="w-[fill] absolute top-0 left-0 -z-10 brightness-55  main-image"/>
            </div>
            <div className="flex flex-col mb-[350px]">
                <BrowseNavBar/>
            <div className=" flex justify-between w-full items-center pl-[60px] pr[0px] mt-[30%]">
                <div className="flex gap-4">
                    <div className="text-black font-[500] h-[54.343px] py-[11px] pr-[34px] pl-[28px] bg-white rounded flex items-center gap-4 text-[22.548px]"><FaPlay/><p>Play</p></div>
                    <div className="text-white font-[500] h-[54.343px] py-[11px] pr-[34px] pl-[28px] bg-[#6d6d6eb3] rounded flex items-center gap-4 text-[22.548px]"><FaExclamationCircle/><p>More Info</p></div>
                </div>
                <div>
                    <div className="browsmainage pr-[66px] pl-[15px] py-[9px] bg-[#21212199] relative">
                        <h1 className="text-white">16+</h1>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col bg-[#141414] movies-container">
                <div className=" -translate-y-[63%]">
                    <div className=" flex flex-col gap-2">
                        <Genre title="US Teen TV Shows"/>
                        <div className="px-[66px]">
                        <OneCard/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Genre title="US Teen TV Shows"/>
                        <div className="px-[66px]">
                        <OneCard/>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}
export default MainBrows