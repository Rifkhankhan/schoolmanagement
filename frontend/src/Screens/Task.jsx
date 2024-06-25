import React, { useState } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Image,
	Row,
	Table
} from 'react-bootstrap'
import image from './../Images/kholi 48th century.PNG'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
// import { useGetClassesQuery } from '../store/ClassApiSlice'
import { classes } from '../DummyData'

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

const Task = () => {
	const navigate = useNavigate()
	const [showYear, setShowYear] = useState(false)
	const [selectedYear, setSelectedYear] = useState()
	const [selectedClass, setSelectedClass] = useState()
	const [showBatch, setShowBatch] = useState(false)
	const { keyword, pageNumber } = useParams()
	const [selectedActivity, setSelectedActivity] = useState(activities[0])

	// const {
	// 	data: classes,
	// 	isLoading: isLoadingClass,
	// 	error: classError
	// } = useGetClassesQuery({
	// 	keyword,
	// 	pageNumber
	// })

	// Assuming 'classes' array is defined as per your example

	// Function to separate data by year
	function separateDataByYear(classes) {
		// Initialize arrays for each year
		const dataByYear = {
			2022: [],
			2023: []
		}

		// Iterate through classes and categorize by year
		classes.forEach(cls => {
			if (cls.year === 2022) {
				dataByYear[2022].push(cls)
			} else if (cls.year === 2023) {
				dataByYear[2023].push(cls)
			}
			// You can add more conditions for other years if needed
		})

		// Return an array of arrays, one for each year
		return Object.values(dataByYear)
	}

	// Separate the 'classes' array by year
	const separatedData = separateDataByYear(classes)

	const filteredData = classes.filter(data => data.year === selectedYear)

	const ViewStudentHandler = () => {
		navigate(`/student/${1}`)
	}

	const createStudentHandler = () => {
		navigate('/student/add')
	}

	const handleActivitySelect = activity => {
		setSelectedActivity(activity)
	}
	return (
		<Container
			style={{ paddingTop: '10vh', minHeight: '100vh' }}
			className="mx-auto position-relative">
			{/* {!isLoadingClass && ( */}
			<Row className="my-2">
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
			{showYear && (
				<Row className="my-2">
					<Col md={3} lg={4}>
						{/* senior Prefect */}
						<Image src={image} fluid className="rounded" />
						<h4 className="text-center mt-2">Senior Prefect</h4>
					</Col>
					<Col md={3} lg={4}>
						{/* senior Prefect */}
						<Image src={image} fluid className="rounded" />
						<h4 className="text-center mt-2">Vice Senior Prefect</h4>
					</Col>
				</Row>
			)}
			<Row>
				{!showBatch && !showYear && (
					<Table
						striped
						variant="primary"
						hover
						style={{
							background: 'rgb(20, 20, 96)',
							boxShadow: ' 0 4px 8px 0 rgba(31, 38, 135, 0.37)'
						}}>
						<thead>
							<tr>
								<th>#</th>
								<th>Year</th>
								<th>Classes</th>
								<th>Total Students</th>
							</tr>
						</thead>
						<tbody>
							{separatedData.map((data, index) =>
								data.slice(0, 1).map(dat => (
									<tr
										onClick={() => {
											setShowYear(prev => !prev)
											setSelectedYear(data[0].year)
										}}>
										<td>{index + 1}</td>
										<td>{dat.year}</td>
										<td>
											{data.map((da, ind) => {
												if (ind + 1 !== data.length) {
													return da.name + ','
												} else {
													return da.name
												}
											})}
										</td>
										<td>
											{data.reduce((total, cls) => {
												return total + +cls.totalStudents
											}, 0)}
										</td>
									</tr>
								))
							)}
						</tbody>
					</Table>
				)}

				{!showBatch && showYear && (
					<Row>
						<h3>{selectedYear} Batch</h3>
						<Table striped hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Classes</th>
									<th>Girls</th>
									<th>Boys</th>
									<th>Total Students</th>
								</tr>
							</thead>
							<tbody>
								{filteredData.map((data, index) => (
									<tr
										key={index}
										onClick={() => {
											setShowBatch(prev => !prev)
											setSelectedClass(data.name)
										}}>
										<td>{index + 1}</td>
										<td>{data.name}</td>
										<td>{data.countGirls}</td>
										<td>{data.countBoys}</td>
										<td>{data.totalStudents}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Row>
				)}
			</Row>

			{/* need to show student for this {selectedYear} {selectedClass}*/}
			{showBatch && showYear && (
				<Row className="my-2 mx-auto">
					<h3>
						{selectedYear} Class : {selectedClass}
					</h3>

					<Row>
						{filteredData.map(data => (
							<Col
								sm={6}
								md={4}
								lg={3}
								className="mt-2"
								onClick={ViewStudentHandler}>
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>{data.moniter}</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Row>
			)}

			<Button
				onClick={createStudentHandler}
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

export default Task
