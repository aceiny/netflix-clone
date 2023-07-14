import { createSlice } from "@reduxjs/toolkit";
const movieslice = createSlice({
    name : 'movie',
    initialState : {
        movie : "",
    },
    reducers : {
        addmovie : (state,action) => { 
            state.movie = action.payload
        },
    }
})
export default movieslice