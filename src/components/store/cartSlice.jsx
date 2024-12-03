import { createSlice } from "@reduxjs/toolkit";
const initialData={
    cartData: localStorage.getItem('isCartData')==undefined?[]:JSON.parse(localStorage.getItem('isCartData'))
}
export const cartSlice=createSlice ({
    name:'mycart',
    initialState:initialData ,
    reducers:{
        UPDATE_CART:(state,action)=>{
            state.cartData=action.payload
        }

    }
})
export const {UPDATE_CART}=cartSlice.actions
export default cartSlice.reducer;