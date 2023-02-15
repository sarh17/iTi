<<<<<<< HEAD
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
=======
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
>>>>>>> 9b3aa67b9e971d0212fbdffdb52f727fde4f5221
export const cartReducer= cartSlice.reducer;