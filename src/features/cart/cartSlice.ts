import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "kratomCart",
  initialState: {
    products: localStorage.getItem("kratomCart") ? JSON.parse(localStorage.getItem("kratomCart")).products : [],
    quantity: localStorage.getItem("kratomCart") ? JSON.parse(localStorage.getItem("kratomCart")).quantity : 0,
    total: localStorage.getItem("kratomCart") ? JSON.parse(localStorage.getItem("kratomCart")).total : 0,
  },
  reducers: {
    addProduct: (state, action) => {
        state.products.push({
            tempID: nanoid(),
            ...action.payload
        });
        state.total += parseFloat(action.payload.variant.price) * parseFloat(action.payload.quantity); 
        state.quantity += 1;
        localStorage.setItem("kratomCart",JSON.stringify(state))
    },
    removeProduct: (state, action) => {
        let price=0
        state.products.map((prod)=>{
            if(prod.tempID != action.payload){
                price += parseFloat(prod.variant.price) * parseFloat(prod.quantity)
            }
        })
      state.products = state.products.filter(
        (prod) => prod.tempID !== action.payload,
      );
      state.total = price
      state.quantity -= 1;
      localStorage.setItem("kratomCart",JSON.stringify(state))
    },
    increaseProductPrice: (state,action) => {
      let data = state.products
      let price = 0
      for (let product of data) {
        if(product.tempID === action.payload){
          price = parseFloat(product.variant.price)
          product.quantity = parseFloat(product.quantity) + 1
        }
      }
      state.quantity += 1;
      state.total += parseFloat(price)
      console.log(data)
      localStorage.setItem("kratomCart",JSON.stringify(state))
    },
    decreaseProductPrice: (state,action) => {
      console.log(action.payload)
      let data = state.products
      let price = 0
      for (let product of data) {
        if(product.tempID === action.payload){
          price = parseFloat(product.variant.price)
            product.quantity = parseFloat(product.quantity) - 1
          }
        }
        state.quantity -= 1;
      state.total -= parseFloat(price)
      console.log(data)
      localStorage.setItem("kratomCart",JSON.stringify(state))
    },
  },
});

export const { addProduct, removeProduct,increaseProductPrice,decreaseProductPrice } = cartSlice.actions;

export default cartSlice.reducer;
