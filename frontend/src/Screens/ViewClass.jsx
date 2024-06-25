import React, { useEffect, useState } from 'react'
import {
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	ListGroup,
	Row
} from 'react-bootstrap'
import image from './../Images/kholi 48th century.PNG'
import LineChart from '../Components/LineChart/LineChart'
import PieChart from '../Components/PieChart/PieChart'

const ViewClass = () => {
	const [chartHeight, setChartHeight] = useState(300) // Initial height, adjust as needed

	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

	// Define an array of student activities
	const activities = [
		'Exams',
		'Assignments',
		'Projects',
		'Quizzes',
		'Lab Work',
		'Presentations',
		'Group Work',
		'Field Trips',
		'Homework',
		'Class Participation',
		'Reading',
		'Research Papers',
		'Essays',
		'Online Discussions',
		'Extracurricular Activities'
	]

	const [selectedActivity, setSelectedActivity] = useState(activities[0])

	// Generate an array of years (e.g., from 2000 to current year)
	const years = Array.from({ length: 15 }, (_, i) => 2010 + i)

	const titles = Array.from({ length: 15 }, (_, i) => 2010 + i)

	// Handle year selection
	const handleYearSelect = year => {
		setSelectedYear(year)
	}

	// Handle activity selection
	const handleActivitySelect = activity => {
		setSelectedActivity(activity)
	}

	const setChartHeights = () => {
		const windowHeight = window.innerHeight
		const newHeight = windowHeight * 0.4 // Adjust the multiplier as needed
		setChartHeight(newHeight)
	}

	// Update chart heights when component mounts or window resizes
	useEffect(() => {
		setChartHeights()
		window.addEventListener('resize', setChartHeights)
		return () => {
			window.removeEventListener('resize', setChartHeights)
		}
	}, [])
	return (
		<Container
			style={{ paddingTop: '8vh', minHeight: '100vh' }}
			className="mx-auto"
			fluid>
			<Row>
				<Col sm={5} lg={4} className="mt-2 h-100">
					<Card>
						<Card.Img variant="top" src={image} />
					</Card>
				</Col>
				<Col className="mt-2 h-100">
					<Card>
						<ListGroup>
							<ListGroup.Item className="d-flex align-items-center">
								<h4>First Name : </h4>
								<p className="my-auto ms-1"> Mohammed</p>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center">
								<h4>Last Name : </h4>
								<p className="my-auto ms-1"> Rifkhan</p>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center">
								<h4>Index : </h4>
								<p className="my-auto ms-1">CS18030</p>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center">
								<h4>Current Class : </h4>
								<p className="my-auto ms-1">O/L</p>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center">
								<h4>Gurdian Name : </h4>
								<p className="my-auto ms-1">Abdul Raheem</p>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>

			<Row className="mt-2 mx-auto">
				<DropdownButton
					id="dropdown-item-button"
					title={`${selectedYear} Perfomance`}>
					{years.map(year => (
						<Dropdown.Item
							as="button"
							key={year}
							onClick={() => handleYearSelect(year)}>
							{year}
						</Dropdown.Item>
					))}
				</DropdownButton>
				<Row className="mx-auto">
					{/* line chart */}
					{/* show attendance herr by months */}

					<Col
						md={5}
						className="mx-auto mt-2"
						style={{
							minHeight: '45vh',
							height: chartHeight,
							backdropFilter: 'blur(16px) saturate(180%)',
							WebkitBackdropFilter: 'blur(16px) saturate(180%)',
							backgroundColor: 'rgba( 0, 0, 250, 250 )',
							borderRadius: '12px',
							border: '1px solid rgba(209, 213, 219, 0.3)'
						}}>
						<LineChart expenses={[]} receipts={[]} requestList={[]} />
					</Col>

					{/* pie chart */}
					{/* show attendance herr by months */}
					<Col
						md={5}
						className="mx-auto mt-2"
						style={{
							minHeight: '45vh',
							height: chartHeight,
							backdropFilter: 'blur(16px) saturate(180%)',
							WebkitBackdropFilter: 'blur(16px) saturate(180%)',
							backgroundColor: 'rgba( 0, 0, 0, 250 )',
							borderRadius: '12px',
							border: '1px solid rgba(209, 213, 219, 0.3)'
						}}>
						<PieChart />
					</Col>
				</Row>
			</Row>

			<Row className="mt-2 mx-auto">
				<DropdownButton id="dropdown-item-button" title={`${selectedActivity}`}>
					{activities.map(activity => (
						<Dropdown.Item
							as="button"
							key={activity}
							onClick={() => handleActivitySelect(activity)}>
							{activity}
						</Dropdown.Item>
					))}
				</DropdownButton>
			</Row>
			<Row>
				<Col md={4} className="mt-2">
					<Card
						style={{
							background: 'rgba(125, 242, 242, 0.15)',
							borderRadius: '10px',
							border: '1px solid rgba( 0, 0, 0, 0.18 )'
						}}>
						<Card.Title as="h3" className="px-3 py-1">
							1st Term
						</Card.Title>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h6>Date : 2024-12-12</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Present Studens : 50</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Assent Studens : 10</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Batch Top : Mohammed Rifkhan</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Your Total Score : 650</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Your Position : 5</h6>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>

				<Col md={4} className="mt-2">
					<Card
						style={{
							background: 'rgba(125, 242, 242, 0.15)',
							borderRadius: '10px',
							border: '1px solid rgba( 0, 0, 0, 0.18 )'
						}}>
						<Card.Title as="h3" className="px-3 py-1">
							2nd Term
						</Card.Title>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h6>Date : 2024-12-12</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Present Studens : 50</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Assent Studens : 10</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Batch Top : Mohammed Rifkhan</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Your Total Score : 650</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Your Position : 5</h6>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="mt-2">
					<Card
						style={{
							background: 'rgba(125, 242, 242, 0.15)',
							borderRadius: '10px',
							border: '1px solid rgba( 0, 0, 0, 0.18 )'
						}}>
						<Card.Title as="h3" className="px-3 py-1">
							3rd Term
						</Card.Title>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h6>Date : 2024-12-12</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Present Studens : 50</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Assent Studens : 10</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Batch Top : Mohammed Rifkhan</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Your Total Score : 650</h6>
								</ListGroup.Item>

								<ListGroup.Item>
									<h6>Your Position : 5</h6>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default ViewClass
