import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	roles: [],
	userInfo: localStorage.getItem('userInfo')
		? JSON.parse(localStorage.getItem('userInfo'))
		: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredential: (state, action) => {
			state.userInfo = action.payload

			localStorage.setItem('userInfo', JSON.stringify(action.payload))
		},

		logout: (state, action) => {
			state.userInfo = null
			localStorage.clear()
		},
		setRoles: (state, action) => {
			state.roles = [...action.payload]
		}
	}
})

export const { setCredential, logout, setRoles } = authSlice.actions
export default authSlice.reducer
