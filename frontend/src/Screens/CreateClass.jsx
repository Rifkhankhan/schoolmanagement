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

import CreateClassForm from '../Components/CreateClassForm/CreateClassForm'
import ClassTable from '../Components/ClassTable/ClassTable'
import RecentClassTable from '../Components/RecentClassTable/RecentClassTable'

const CreateClass = () => {
	return (
		<Container
			fluid
			className="position-relative"
			style={{ paddingTop: '8vh', minHeight: '100vh' }}>
			<Row className="d-flex justify-content-between  my-2 mx-auto">
				<Col md={6}>
					<CreateClassForm />
				</Col>

				{/* recently added staffs */}
				<Col md={6}>
					<RecentClassTable />
				</Col>
			</Row>

			<Row>
				<ClassTable />
			</Row>
		</Container>
	)
}

export default CreateClass
