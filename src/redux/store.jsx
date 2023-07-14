import { configureStore } from "@reduxjs/toolkit"
import favslice from "./reducers"
import movieslice from "./movieslice"
const Store = configureStore(
    {
        reducer : { 
            fav : favslice.reducer,
            mov : movieslice.reducer
        }
    }
)
export default Store