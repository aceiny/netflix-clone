import React from "react";
import {MdArrowForwardIos} from 'react-icons/md'
const Genre = ({title}) => {
    return (
        <div className="flex gap-2 items-center justify-start px-[66px] mt-[71px] Genre-left cursor-pointer">
            <div className="text-[170%]"><h1 className=" text-white capitalize">{title}</h1></div>
            <div className=" text-[#54b9c5] text-[110%] flex items-center"><p className="Genre-explore-more">explore more </p><MdArrowForwardIos className="genre-icon"/></div>
        </div>
    )
}
export default Genre