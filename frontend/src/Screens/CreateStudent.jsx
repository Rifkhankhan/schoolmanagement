import React, { useEffect, useState } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Row
} from 'react-bootstrap'

import CreateStudentForm from '../Components/CreateStudentForm/CreateStudentForm'
import UsersTable from '../Components/UsersTable/UsersTable'
import SummaryTable from '../Components/SummaryTable/SummaryTable'
import RecentStudentTable from '../Components/RecentStudentTable/RecentStudentTable'
import StudentTable from '../Components/StudentTable/StudentTable'
import { getStudents } from '../Actions/StudentActions'
import { useDispatch, useSelector } from 'react-redux'

const CreateStudent = () => {
	const dispatch = useDispatch()
	const students = useSelector(state => state.student.students)

	useEffect(() => {
		dispatch(getStudents())
	}, [students])
	return (
		<Container
			fluid
			className="position-relative"
			style={{ paddingTop: '8vh', minHeight: '100vh' }}>
			<Row className="d-flex justify-content-between  my-2 mx-auto">
				<Col md={6}>
					<CreateStudentForm />
				</Col>

				{/* recently added staffs */}
				<Col md={6}>
					<RecentStudentTable />
				</Col>
			</Row>

			<Row>
				<StudentTable students={students} />
			</Row>
		</Container>
	)
}

export default CreateStudent
