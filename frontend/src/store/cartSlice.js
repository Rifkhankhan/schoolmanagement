import { createSlice } from '@reduxjs/toolkit'
import { addDecimals } from './../cartUtils'

const cardSlice = createSlice({
	name: 'cart',

	initialState: {
		cardItems: [],
		itemsPrice: 0,
		paymentMethod: 'PayPal',
		shippingAddress: {}
	},
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload

			const existItem = state.cardItems?.find(cart => cart?._id === item?._id)

			if (!existItem) {
				state.cardItems = [...state.cardItems, item]
			}
			// calculate item Price
			state.itemsPrice = addDecimals(
				state.cardItems.reduce((acc, item) => acc + item.price * item.qty, 0)
			)
		},
		removeFromCart: (state, action) => {
			const item = action.payload

			const existItem = state.cardItems.find(cart => cart._id === item)

			if (existItem) {
				state.cardItems = state.cardItems.filter(cart => cart._id !== item)
			}
		},
		saveShippingAddresss: (state, action) => {
			state.shippingAddress = action.payload
		},
		savePaymentMethode: (state, action) => {
			state.paymentMethod = action.payload
		},
		clearCartItems: (state, action) => {
			state.cardItems = []
		}
	}
})

export const {
	addToCart,
	removeFromCart,
	saveShippingAddresss,
	savePaymentMethode,
	clearCartItems
} = cardSlice.actions

export default cardSlice.reducer
