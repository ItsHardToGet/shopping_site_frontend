import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './cartSlice'
const store=configureStore({
  reducer:{
    mycart:CartSlice
  }  
})
export default store;