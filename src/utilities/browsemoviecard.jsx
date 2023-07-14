import React from "react";
import { useDispatch } from "react-redux";
import movieslice from "../redux/movieslice";
const OneCard = ({id,photo}) => {
    const {addmovie} = movieslice.actions
    const dispatch = useDispatch()
    return(
        <div className="relative w-[16.35%]  rounded cursor-pointer" onClick={()=>dispatch(addmovie(1))}>
            <img src="public/imgs/tv.png" className=" w-full h-[160px] rounded-xl" alt="" />
        </div>
    )
}
export default OneCard