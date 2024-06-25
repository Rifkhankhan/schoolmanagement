import { apiSlice } from './apiSlice'
import { CLASSESS_URL } from '../constants'

export const classApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getClasses: builder.query({
			query: ({ keyword, pageNumber }) => ({
				url: CLASSESS_URL,
				params: {
					keyword,
					pageNumber
				}
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
		getClass: builder.query({
			query: id => ({
				url: `${CLASSESS_URL}/${id}`
			}),
			keepUnusedDataFor: 5
		}),

		createClass: builder.mutation({
			query: () => ({
				url: CLASSESS_URL,
				method: 'POST'
			}),
			keepUnusedDataFor: 5,
			invalidatesTags: ['Class']
		}),
		updateClass: builder.mutation({
			query: data => ({
				url: `${CLASSESS_URL}/${data.id}`,
				method: 'PUT',
				body: data
			}),
			keepUnusedDataFor: 5,
			invalidatesTags: ['Product']
		}),
		// upload: builder.mutation({
		// 	query: data => ({
		// 		url: UPLOAD_URL,
		// 		method: 'POST',
		// 		body: data
		// 	}),
		// 	keepUnusedDataFor: 5
		// }),
		deleteClass: builder.mutation({
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
	useGetClassQuery,
	useGetClassesQuery,
	useCreateClassMutation,
	useUpdateClassMutation,
	// useUploadMutation,
	useDeleteClassMutation
	// useReviewMutation,
	// useGetTopProductsQuery
} = classApiSlice
