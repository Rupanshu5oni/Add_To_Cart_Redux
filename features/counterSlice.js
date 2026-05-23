import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: 'counter',

    initialState: {

        items: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],

    },

    reducers: {

        /* Add Item */

        addItem: (state, action) => {

            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {

                state.items[itemIndex].quantity += 1;

            } else {

                state.items.push({
                    ...action.payload,
                    quantity: 1
                });

            }

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            );

        },

        /* Remove Item */

        removeItem: (state, action) => {

            const cartData = state.items.filter(
                (item) => item.id !== action.payload.id
            );

            state.items = cartData;

            localStorage.setItem(
                'cartItems',
                JSON.stringify(cartData)
            );

        },

        /* Increase Quantity */

        increaseQty: (state, action) => {

            const item = state.items.find(
                (item) => item.id === action.payload.id
            );

            item.quantity += 1;

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            );

        },

        /* Decrease Quantity */

        decreaseQty: (state, action) => {

            const item = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (item.quantity > 1) {

                item.quantity -= 1;

            }

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            );

        }

    }

});

export const {
    addItem,
    removeItem,
    increaseQty,
    decreaseQty
} = counterSlice.actions;

export default counterSlice.reducer;