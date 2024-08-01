import swal from 'sweetalert'
import {
	createStudentApi,
	getStudentsApi,
	updateStudentApi,
	deleteStudentApi,
	disableStudentApi,
	getStudentApi
} from './../Apis/StudentApi'
import { studentActions } from '../store/studentSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const createStudent = formData => async dispatch => {
	dispatch(studentActions.handleLoading())
	try {
		const { data } = await createStudentApi(formData)
		console.log(data)
		if (data.success) {
			dispatch(studentActions.createStudent(data.students))

			toast.success('Completed Successfully!', {
				autoClose: 2000
			})
		}
	} catch (error) {
		if (error.response?.status === 400) {
			toast.error(`Oops! Something Wrong: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 404) {
			toast.error(
				`You don't have an Account: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 409) {
			toast.error(
				`Oops! You have no access: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 408) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 500) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		}
	}
	dispatch(studentActions.handleLoading())
}

export const getStudents = () => async dispatch => {
	dispatch(studentActions.handleLoading())
	try {
		const { data } = await getStudentsApi()

		if (data.success) {
			dispatch(studentActions.setStudents(data?.students))
		}
	} catch (error) {
		if (error.response?.status === 400) {
			toast.error(`Oops! Something Wrong: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 404) {
			toast.error(
				`You don't have an Account: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 409) {
			toast.error(
				`Oops! You have no access: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 408) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 500) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		}
	}
	dispatch(studentActions.handleLoading())
}

export const updateStudent = (formData, datas) => async dispatch => {
	dispatch(studentActions.handleLoading())

	try {
		const { data } = await updateStudentApi(formData.arid, formData)
		if (data.success) {
			dispatch(studentActions.getStudents(data.requests))
			toast.success('Updated Successfully!', {
				autoClose: 2000
			})
		}
	} catch (error) {
		if (error.response?.status === 400) {
			toast.error(`Oops! Something Wrong: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 404) {
			toast.error(
				`You don't have an Account: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 409) {
			toast.error(
				`Oops! You have no access: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 408) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 500) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		}
	}
	dispatch(studentActions.handleLoading())
}

export const disableStudent = (formData, datas) => async dispatch => {
	dispatch(studentActions.handleLoading())

	try {
		const { data } = await disableStudentApi(formData.arid, formData)
		if (data.success) {
			dispatch(studentActions.getStudents(data.requests))
			toast.success('Updated Successfully!', {
				autoClose: 2000
			})
		}
	} catch (error) {
		if (error.response?.status === 400) {
			toast.error(`Oops! Something Wrong: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 404) {
			toast.error(
				`You don't have an Account: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 409) {
			toast.error(
				`Oops! You have no access: ${error?.response?.data?.message}`,
				{
					autoClose: 2000
				}
			)
		} else if (error.response?.status === 408) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		} else if (error.response?.status === 500) {
			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
				autoClose: 2000
			})
		}
	}
	dispatch(studentActions.handleLoading())
}
// export const deleteStudent = formData => async dispatch => {
// 	dispatch(AccountRequestActions.handleLoading())
// 	try {
// 		const { data } = await AccountRequestApis.disableAccountRequest(formData)

// 		if (data.success) {
// 			dispatch(AccountRequestActions.deleteAccountRequest(data.product))
// 			toast.success('Deleted Successfully!', {
// 				autoClose: 2000
// 			})
// 		} else {
// 			swal('Oops! Something Wrong', 'Try again please!', 'error')
// 		}
// 	} catch (error) {
// 		if (error.response?.status === 400) {
// 			toast.error(`Oops! Something Wrong: ${error?.response?.data?.message}`, {
// 				autoClose: 2000
// 			})
// 		} else if (error.response?.status === 404) {
// 			toast.error(
// 				`You don't have an Account: ${error?.response?.data?.message}`,
// 				{
// 					autoClose: 2000
// 				}
// 			)
// 		} else if (error.response?.status === 409) {
// 			toast.error(
// 				`Oops! You have no access: ${error?.response?.data?.message}`,
// 				{
// 					autoClose: 2000
// 				}
// 			)
// 		} else if (error.response?.status === 408) {
// 			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
// 				autoClose: 2000
// 			})
// 		} else if (error.response?.status === 500) {
// 			toast.error(`Internal Server Error: ${error?.response?.data?.message}`, {
// 				autoClose: 2000
// 			})
// 		}
// 	}
// 	dispatch(AccountRequestActions.handleLoading())
// }
