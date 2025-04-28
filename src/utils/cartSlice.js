import {createSlice ,current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
          addItem : (state,action) =>{
            state.items.push(action.payload);
          },
          removeItem : (state) =>{
            state.items.pop();
          },
          clearCart : (state) =>{
            state.items.length = 0; //[]
            //console.log(current(state))

            // RTK states either you have to mutate the existing state or return a new state
             // or return { items: []}
          },
    },

});


export const {addItem,removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;