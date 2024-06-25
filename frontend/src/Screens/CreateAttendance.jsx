import React, { useState } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Form,
	Row,
	Table
} from 'react-bootstrap'

import CreateStudentForm from '../Components/CreateStudentForm/CreateStudentForm'
import UsersTable from '../Components/UsersTable/UsersTable'
import SummaryTable from '../Components/SummaryTable/SummaryTable'
import { FaCheck } from 'react-icons/fa'

const { faker } = require('@faker-js/faker') // random users

export function createRandomUser() {
	return {
		userId: faker.string.uuid(),
		firstName: faker.person.firstName,
		lastName: faker.person.lastName,
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.image.avatar(),
		birthdate: faker.date.birthdate()
	}
}

const CreateAttendance = () => {
	const [selectedClass, setSelectedClass] = useState(false)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectAll, setSelectAll] = useState(false)
	const randomUsers = faker.helpers.multiple(createRandomUser, {
		count: 20
	})
	const data = [
		{ id: 1, name: 'John Doe', email: 'john@example.com' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
		// Add more rows as needed
	]

	const handleCheckboxChange = id => {
		setSelectedRows(prevSelectedRows => {
			if (prevSelectedRows.includes(id)) {
				return prevSelectedRows.filter(rowId => rowId !== id)
			} else {
				return [...prevSelectedRows, id]
			}
		})
	}

	const handleSelectAllChange = () => {
		if (selectAll) {
			setSelectedRows([])
		} else {
			setSelectedRows(data.map(row => row.id))
		}
		setSelectAll(!selectAll)
	}

	const createAttendanceHandler = () => {}

	const isRowSelected = id => selectedRows.includes(id)
	return (
		<Container
			fluid
			className="position-relative"
			style={{ paddingTop: '8vh', minHeight: '100vh' }}>
			<Row
				className="d-flex justify-content-between  my-2 mx-auto"
				// style={{
				// 	background: ' rgb(20, 20, 96)',
				// 	boxShadow: '0 4px 8px 0 rgba(31, 38, 135, 0.37)',
				// 	backdropFilter: 'blur(2.5px)',
				// 	borderRadius: '10px',
				// 	border: '1px solid rgba(255, 255, 255, 0.18)'
				// }}
			>
				{!selectedClass && (
					<Table
						className="m-auto border-black"
						style={{ backgroundColor: 'transparent' }}
						responsive>
						<thead>
							<tr>
								<th>#</th>
								{Array.from({ length: 12 }).map((_, index) => (
									<th key={index}>Class</th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr onClick={() => setSelectedClass(prev => !prev)}>
								<td>1</td>
								{Array.from({ length: 12 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
							</tr>
							<tr onClick={() => selectedClass(prev => !prev)}>
								<td>2</td>
								{Array.from({ length: 12 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
							</tr>
							<tr>
								<td>3</td>
								{Array.from({ length: 12 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
							</tr>

							<tr>
								<td>1</td>
								{Array.from({ length: 12 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
							</tr>
							<tr>
								<td>2</td>
								{Array.from({ length: 12 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
							</tr>
							<tr>
								<td>3</td>
								{Array.from({ length: 12 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
							</tr>
						</tbody>
					</Table>
				)}

				{selectedClass && (
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>
									<Form.Check
										type="checkbox"
										checked={selectAll}
										onChange={handleSelectAllChange}
									/>
								</th>
								<th>Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{data.map(row => (
								<tr key={row.id}>
									<td>
										<Form.Check
											type="checkbox"
											checked={isRowSelected(row.id)}
											onChange={() => handleCheckboxChange(row.id)}
										/>
									</td>
									<td>{row.name}</td>
									<td>{row.email}</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Row>
			{selectedClass && (
				<Button
					onClick={createAttendanceHandler}
					className="btn-success position-fixed rounded-5 p-3 "
					style={{
						bottom: '3vh',
						right: '3vh',
						width: '7vh',
						height: '7vh',
						cursor: 'pointer'
					}}>
					<FaCheck />
				</Button>
			)}
		</Container>
	)
}

export default CreateAttendance
