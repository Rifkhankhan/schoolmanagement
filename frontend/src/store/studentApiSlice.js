import { apiSlice } from './apiSlice'
import { CLASSESS_URL } from '../constants'

export const studentApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		// getClasses: builder.query({
		// 	query: ({ keyword, pageNumber }) => ({
		// 		url: CLASSESS_URL,
		// 		params: {
		// 			keyword,
		// 			pageNumber
		// 		}
		// 	}),
		// 	keepUnusedDataFor: 5,
		// 	providesTags: ['Class']
		// }),
		getStudentes: builder.query({
			query: () => ({
				url: CLASSESS_URL
			}),
			keepUnusedDataFor: 5,
			providesTags: ['Class']
		}),
		// getTopProducts: builder.query({
		// 	query: () => ({
		// 		url: `${PRODUCTS_URL}/top`
		// 	}),
		// 	keepUnusedDataFor: 5,
		// 	providesTags: ['Product']
		// }),
		getStudent: builder.query({
			query: id => ({
				url: `${CLASSESS_URL}/${id}`
			}),
			keepUnusedDataFor: 5
		}),

		createStudent: builder.mutation({
			query: data => ({
				url: CLASSESS_URL,
				method: 'POST',
				body: { ...data }
			}),
			keepUnusedDataFor: 5,
			invalidatesTags: ['Class']
		}),
		updateStudent: builder.mutation({
			query: data => ({
				url: `${CLASSESS_URL}/${data.classId}`,
				method: 'PUT',
				body: { ...data }
			}),
			keepUnusedDataFor: 5,
			invalidatesTags: ['Class']
		}),
		// upload: builder.mutation({
		// 	query: data => ({
		// 		url: UPLOAD_URL,
		// 		method: 'POST',
		// 		body: data
		// 	}),
		// 	keepUnusedDataFor: 5
		// }),
		deleteStudent: builder.mutation({
			query: id => ({
				url: `${CLASSESS_URL}/${id}`,
				method: 'DELETE'
			}),
			keepUnusedDataFor: 5
		})
		// review: builder.mutation({
		// 	query: data => ({
		// 		url: `${PRODUCTS_URL}/${data.id}/review`,
		// 		method: 'POST',
		// 		body: data
		// 	}),
		// 	keepUnusedDataFor: 5,
		// 	invalidatesTags: ['Product']
		// })
	})
})

export const {
	useGetStudentQuery,
	useGetStudentesQuery,
	useCreateStudentMutation,
	useUpdateStudentMutation,
	// useUploadMutation,
	useDeleteStudentMutation
	// useReviewMutation,
	// useGetTopProductsQuery
} = studentApiSlice
