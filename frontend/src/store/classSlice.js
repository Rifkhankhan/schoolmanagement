import { createSlice } from '@reduxjs/toolkit'

export const classSlice = createSlice({
	name: 'class',
	initialState: {
		classes: []
	},
	reducers: {
		createClass: (state, action) => {
			state.classes.push(action.payload)
		},
		getClasses: (state, action) => {
			state.classes = [...action.payload]
		},
		handleLoading: state => {
			state.loading = !state.loading
		},

		getClass: (state, action) => {
			//   if (action.payload.success) state.notification = true;
		},
		deleteClass: (state, action) => {
			state.classes = state.classes.filter(user => user.id !== action.payload)
		},
		updateClass: (state, action) => {
			const updatedUser = {
				id: action.payload.id,
				...action.payload.formData
			}

			// Find the index of the object to update
			const index = state.classes.findIndex(
				user => user.id === action.payload.id
			)

			if (index !== -1) {
				// Create a new array with the updated object
				const updatedUsers = [
					...state.classes.slice(0, index), // elements before the updated object
					updatedUser, // updated object
					...state.classes.slice(index + 1) // elements after the updated object
				]
				state.classes = updatedUsers
			}
		},
		activateToggle: (state, action) => {
			// find user
			const updatedUser = state.classes.find(user => user.id === action.payload)
			updatedUser.status = !updatedUser?.status
			// Find the index of the object to update
			const index = state.products.findIndex(user => user.id === action.payload)
			if (index !== -1) {
				// Create a new array with the updated object
				const updatedUsers = [
					...state.products.slice(0, index), // elements before the updated object
					updatedUser, // updated object
					...state.products.slice(index + 1) // elements after the updated object
				]
				state.products = updatedUsers
			}
		}
	}
})

export const { getClasses, createClass } = classSlice.actions
// export const classAction = classSlice.actions

export default classSlice.reducer
