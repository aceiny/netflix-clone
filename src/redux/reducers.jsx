import { createSlice } from "@reduxjs/toolkit";
const favslice = createSlice({
    name : "fav",
    initialState : {
        favs : [],
    },
    reducers : {
        addtofav : (state,action) => {
            state.favs = [action.payload,...state.favs]
        },
        removefromfav : (state,action) => {
            const indexofId = state.cartproducts.indexOf(action.payload)
            indexofId != -1 ? state.cartproducts.splice(indexofId,1) : console.log("dont exits")
        }, 
        clearfavs : (state) => { 
            state.favs = []
        },
    },
})

export default favslice