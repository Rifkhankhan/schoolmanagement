const pool = require('../MysqlConnection')
const bcrypt = require('bcrypt')
const asyncHandler = require('../Middleware/asyncHandler')

// create student
exports.createStudent = asyncHandler(async (req, res, next) => {
	try {
		const encryptPassword = await bcrypt.hash('123456', 12)

		const newUser = {
			firstName: req.body?.firstName,
			lastName: req.body?.lastName,
			roleId: +req.body?.roleId,
			narration: req.body?.narration,
			filename: req.body?.filename,
			filepath: req.body?.filepath,
			email: req.body?.email,
			password: encryptPassword
		}

		const columns = Object.keys(newUser).join(',')
		const placeholders = Object.values(newUser)
			.map(() => '?')
			.join(',')

		const query = `INSERT INTO users (${columns}) VALUES (${placeholders})`
		const [result] = await pool.query(query, Object.values(newUser))

		// create student Class

		const newClass = {
			userId: result.insertId,
			classId: +req.body.classId
		}

		const classColumns = Object.keys(newClass).join(',')
		const classPlaceholders = Object.values(newClass)
			.map(() => '?')
			.join(',')

		const classQuery = `INSERT INTO studentclass (${classColumns}) VALUES (${classPlaceholders})`
		const [classResult] = await pool.query(classQuery, Object.values(newClass))

		if (result.affectedRows > 0 && classResult.affectedRows > 0) {
			const [students] = await pool.query(
				'select *from users where roleId = ?',
				[req.body.roleId]
			)
			res.json({ success: true, students: students })
		}
	} catch (err) {
		return next(err)
	}
})

// get all classes
exports.getStudents = asyncHandler(async (req, res, next) => {
	try {
		const [students] = await pool.query('select * from users')
		res.json({ success: true, students: students })
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
