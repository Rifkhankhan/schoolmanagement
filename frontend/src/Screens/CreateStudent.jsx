import React, { useState } from 'react'
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

const CreateStudent = () => {
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
				<StudentTable />
			</Row>
		</Container>
	)
}

export default CreateStudent
