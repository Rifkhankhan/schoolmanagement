import axios from 'axios'

const API = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '',
	withCredentials: true // Include credentials (cookies)
})

// Create a new student
export const createStudentApi = formData => API.post('/student', formData)

// Get a student by ID
export const getStudentApi = id => API.get(`/student/${id}`)

// Disable a student
export const disableStudentApi = formData =>
	API.put(`/student/disable/${formData.arid}`, formData)

// Get all students
export const getStudentsApi = () => API.get('/student')

// Update a student by ID
export const updateStudentApi = (id, formData) =>
	API.put(`/student/${id}`, formData)

// Delete a student by ID
export const deleteStudentApi = id => API.delete(`/student/${id}`)
