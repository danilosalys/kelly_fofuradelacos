import { createSlice } from '@reduxjs/toolkit'
import { CartState } from '../../../@types/cart'
import { Product } from '../../../@types/products'

const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct: Product = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }
        }
    }
})