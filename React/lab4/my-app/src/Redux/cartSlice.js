import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState:{cart:[]},
    reducers:{
        addToCart:(state)=>
        {
            console.log("hi")
        },
        removeCart:(state)=>
        {

        }

    }
})
export const {addToCart,removeCart}= cartSlice.actions;
export const cartReducer= cartSlice.reducer;