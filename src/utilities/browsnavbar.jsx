import React from "react";
import { browsnavdata } from "../componants/browse/data/maindata";
import { Link } from "react-router-dom";
import {LuSearch} from 'react-icons/lu'
const BrowseNavBar = () => { 
    return (
     <>
        <div className="browse-navbar flex justify-between items-center px-[48px] py-[10px]">
            <div className=" flex gap-[33px] items-center"> 
                <div className=""><Link to='../browse'><img src="public/imgs/logo.png" className="w-[115px]" alt="" /></Link></div>
                <div>
                    <ul className="flex gap-[20px]">
                        {browsnavdata.map((v,i)=>{
                            return (
                                <Link to={v.link}><li className="text-[14px] font-[500] text-white hover:text-[#4F4D4Cbf]">{v.title}</li></Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className=" flex gap-[20px] text-[white] items-center">
                <div className="browsnavsearch"><LuSearch className="text-[24px]"/></div>
                <div><h1 className="text-[14px]">DVD</h1></div>
                <div>Notif</div>
                <div>profile</div>
            </div>
        </div>
     </>
    )
}
export default BrowseNavBar