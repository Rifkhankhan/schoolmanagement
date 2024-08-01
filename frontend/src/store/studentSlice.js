import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
	name: 'student',
	initialState: {
		isLoading: false,
		students: []
	},
	reducers: {
		createStudent: (state, action) => {
			state.students = [...action.payload]
		},

		handleLoading: (state, action) => {
			state.isLoading = !state.isLoading
		},
		setStudents: (state, action) => {
			state.students = [...action.payload]
		},
		getStudents: (state, action) => {
			state.students = [...action.payload]
		},

		deleteStudent: (state, action) => {
			state.students = state.users.filter(user => user.id !== action.payload)
		},
		updateStudent: (state, action) => {
			const updatedUser = {
				id: action.payload.id,
				...action.payload.formData
			}

			// Find the index of the object to update
			const index = state.students.findIndex(
				user => user.id === action.payload.id
			)

			if (index !== -1) {
				// Create a new array with the updated object
				const updatedUsers = [
					...state.students.slice(0, index), // elements before the updated object
					updatedUser, // updated object
					...state.students.slice(index + 1) // elements after the updated object
				]
				state.students = updatedUsers
			}
		},
		activateToggle: (state, action) => {
			// find user
			const updatedUser = state.students.find(
				user => user.id === action.payload
			)
			updatedUser.status = !updatedUser?.status
			// Find the index of the object to update
			const index = state.students.findIndex(user => user.id === action.payload)
			if (index !== -1) {
				// Create a new array with the updated object
				const updatedUsers = [
					...state.students.slice(0, index), // elements before the updated object
					updatedUser, // updated object
					...state.students.slice(index + 1) // elements after the updated object
				]
				state.students = updatedUsers
			}
		}
	}
})

export const studentActions = studentSlice.actions
// export const classAction = classSlice.actions

export default studentSlice.reducer
