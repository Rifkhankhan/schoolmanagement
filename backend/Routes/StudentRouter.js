const router = require('express').Router()
const {
	createStudent,
	getStudents
} = require('./../Controllers/StudentController')

const { admin, protect } = require('../Middleware/authMiddlewate.js')
const upload = require('./../Middleware/uploadMiddleware.js')

router.post('/', upload.single('file'), createStudent)

router.get('/', getStudents)
// router.put('/:id', upload.single('file'), updateStudent)
// router.delete('/:id', deleteStudent)
// router.put('/activate/:id', toggleStudent)

module.exports = router
