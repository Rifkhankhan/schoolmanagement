import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// creatApi =>
// fetchBaseQuery => allow to make request to the backend

import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	credentials: 'include' // Include credentials (cookies)
})

export const apiSlice = createApi({
	baseQuery,

	tagTypes: ['Class', 'Attendance', 'User', 'Update', 'News'],
	endpoints: builder => ({})
})
