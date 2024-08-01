const router = require('express').Router()
const {
	CreateClass,
	getClasses,
	updateClass,
	deleteClass
} = require('../Controllers/ClassController.js')

const { admin, protect } = require('./../Middleware/authMiddlewate.js')

const upload = require('./../Middleware/uploadMiddleware.js')

// add new class
router.post('/', upload.single('file'), CreateClass)

// gets
router.get('/', getClasses)

// update
router.put('/:classId', upload.single('file'), updateClass)
router.delete('/:classId', deleteClass)

// get product
// router.get('/:id', protect, getRequest)
// router.post('/import', protect, importRequests)
module.exports = router
