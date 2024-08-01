const pool = require('../MysqlConnection')

const asyncHandler = require('../Middleware/asyncHandler')

// create a class
exports.CreateClass = asyncHandler(async (req, res, next) => {
	// Access file information
	const file = req.file

	try {
		const newClass = {
			name: req.body?.name,
			year: +req.body?.year,
			teacher: req.body?.teacher,
			moniter: req.body?.moniter,
			narration: req.body?.narration,
			totalStudents:
				+req.body?.totalStudents !== NaN ? +req.body?.totalStudents : 0,
			countBoys: +req.body?.countBoys !== NaN ? +req.body?.countBoys : 0,
			countGirls: +req.body?.countGirls !== NaN ? +req.body?.countGirls : 0,
			filename: req.file?.filename, // Add the filename obtained from req.file
			filepath: req.file?.path // Add the filepath obtained from req.file
		}

		const columns = Object.keys(newClass).join(',')
		const placeholders = Object.values(newClass)
			.map(() => '?')
			.join(',')

		const query = `INSERT INTO class (${columns}) VALUES (${placeholders})`

		const [result] = await pool.query(query, Object.values(newClass))

		const [classes] = await pool.query('select * from class')

		if (result.affectedRows > 0) {
			res.json({ success: true, classes: classes })
		}
	} catch (err) {
		console.log(err)
		res.json({ success: false })

		return next(err)
	}
})

// get all classes
exports.getClasses = asyncHandler(async (req, res, next) => {
	try {
		const [classes] = await pool.query('select * from class ')
		res.json(classes)
	} catch (err) {
		return next(err)
	}
})

// //get all products of a shop
exports.updateClass = asyncHandler(async (req, res, next) => {
	try {
		const { classId, ...rest } = req.body
		console.log(req.body)

		const updateUser = {
			...rest,
			createdAt: req?.body?.createdAt?.slice(0, 19),
			filename: req.file?.filename || req.body?.filename,
			filepath: req.file?.path || req.body?.path
		}

		// Construct the SET part of the SQL query dynamically
		const updateFields = Object.keys(updateUser)
			.map(key => `${key} = ?`)
			.join(', ')

		const updateValues = Object.values(updateUser)

		const query = `UPDATE class SET ${updateFields} WHERE classId = ?`

		const [result] = await pool.query(query, [...updateValues, classId])

		if (result.affectedRows > 0) {
			const [classes] = await pool.query('SELECT * FROM class')
			res.json({ success: true, classes: classes })
		} else {
			res.status(404).json({ success: false, message: 'Class not found' })
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: 'Server error' })
		next(err)
	}
})

exports.deleteClass = asyncHandler(async (req, res, next) => {
	try {
		const { classId } = req.params

		// Corrected SQL query
		const [result] = await pool.query('DELETE FROM class WHERE classId = ?', [
			classId
		])

		if (result.affectedRows > 0) {
			const [classes] = await pool.query('SELECT * FROM class')
			res.json({ success: true, classes: classes })
		} else {
			res.status(404).json({ success: false, message: 'Class not found' })
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: 'Server error' })
		next(err)
	}
})
