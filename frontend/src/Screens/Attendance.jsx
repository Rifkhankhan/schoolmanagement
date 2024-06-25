import React, { useState } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Row,
	Table
} from 'react-bootstrap'
import LineChart from '../Components/LineChart/LineChart'
import PieChart from '../Components/PieChart/PieChart'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Attendance = () => {
	const options = ['Student', 'Staffs']
	const [selectedOption, setSelectedOption] = useState(options[0])
	const [selectedDate, setSelectedDate] = useState('')
	const [selectedClass, setSelectedClass] = useState('')

	const navigate = useNavigate()

	const createAttendanceHandler = () => {
		navigate('/attendance/add')
	}

	return (
		<Container
			style={{ paddingTop: '8vh', minHeight: '100vh' }}
			className="mx-auto position-relative">
			<Row className="d-flex justify-content-between align-items-center">
				<DropdownButton
					className="rounded d-inline-block"
					id="dropdown-item-button"
					title={`${selectedOption} Attendance`}>
					{options.map(year => (
						<Dropdown.Item
							as="button"
							key={year}
							onClick={() => setSelectedOption(year)}>
							{year}
						</Dropdown.Item>
					))}
				</DropdownButton>
			</Row>
			<Row className="mx-auto">
				{/* line chart */}
				{/* show attendance herr by months */}

				<Col
					md={5}
					className="mx-auto mt-2"
					style={{
						minHeight: '45vh',

						backgroundColor: 'rgba( 0, 0, 250, 250 )',
						borderRadius: '12px'
					}}>
					<LineChart expenses={[]} receipts={[]} requestList={[]} />
					{/* <h3>Past 7 Days Attendance</h3> */}
				</Col>

				{/* pie chart */}
				{/* show attendance herr by months */}
				<Col
					md={5}
					className="mx-auto mt-2"
					style={{
						minHeight: '45vh',
						backgroundColor: 'rgba( 0, 0, 0, 250 )',
						borderRadius: '12px'
					}}>
					{/* <h3>Today Attendance</h3> */}

					<PieChart />
				</Col>
			</Row>

			<Row className="mt-2">
				{/* attendance sheets */}
				<Row>
					<h3>Previous Date Attandancess</h3>
				</Row>

				{!selectedDate && !selectedClass && (
					<Row>
						<Col
							sm={4}
							md={3}
							lg={2}
							className="mt-2"
							onClick={() => setSelectedDate('2024-5-24')}>
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				)}

				{selectedDate && !selectedClass && (
					<Row>
						<Col
							sm={4}
							md={3}
							lg={2}
							className="mt-2"
							onClick={() => setSelectedClass('10')}>
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col sm={4} md={3} lg={2} className="mt-2">
							<Card className="text-center">
								<Card.Title className="text-center">
									{new Date().getFullYear()}-{new Date().getMonth()}-
									{new Date().getDate()}
								</Card.Title>
								<Card.Body>
									<Card.Text>Present : 550</Card.Text>
									<Card.Text>Absent : 50</Card.Text>
									<Card.Text>Total : 650</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button variant="success" className="d-block">
										View Attendance
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				)}

				{selectedDate && selectedClass && (
					<Row>
						<Table responsive>
							<thead>
								<tr>
									<th>#</th>
									{Array.from({ length: 12 }).map((_, index) => (
										<th key={index}>Table heading</th>
									))}
								</tr>
							</thead>
							<tbody>
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
					</Row>
				)}
			</Row>
			<Button
				onClick={createAttendanceHandler}
				className="btn-primary position-fixed rounded-5 p-3 "
				style={{
					bottom: '3vh',
					right: '3vh',
					width: '7vh',
					height: '7vh',
					cursor: 'pointer'
				}}>
				<FaPlus />
			</Button>
		</Container>
	)
}

export default Attendance
