import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    productprice: 0,
    productquantity: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // {id, name, price}
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push(item)
      }
      else {
        state.items = state.items.filter((i) => i.id != existingItem.id);
        const quantity=existingItem.userquantity;
        const itemindex = state.items.findIndex((item) => item.id == existingItem.id)
        const existingItemquantatity = {
          ...existingItem,
          userquantity: existingItem.userquantity + item.userquantity,
          productprice:existingItem.productprice+item.productprice
        };
        state.items.splice(itemindex,0,existingItemquantatity)
        


      }

      state.productprice = item.userquantity * item.productprice
      state.productquantity = item.userquantity;
      state.totalQuantity += item.userquantity;
      state.totalPrice += item.productprice;


    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.productprice;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
    
      if (existingItem) {
        const oldProductPrice = existingItem.productprice;
        existingItem.userquantity += quantity;
  
        if (existingItem.userquantity === 0) {
          existingItem.productprice = 0;
        } else {
          existingItem.productprice = existingItem.userquantity * existingItem.price;
        }
    
        state.totalPrice = state.totalPrice - oldProductPrice + existingItem.productprice;
    
        
        state.totalQuantity += quantity;
      }
    },
    

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
