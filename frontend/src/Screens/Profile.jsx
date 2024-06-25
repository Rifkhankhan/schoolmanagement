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

const Profile = () => {
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
					<UsersTable />
				</Col>
			</Row>

			<Row>
				<SummaryTable />
			</Row>
		</Container>
	)
}

export default Profile
