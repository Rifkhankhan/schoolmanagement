import React, { useState } from 'react'
import {
	Button,
	Card,
	Carousel,
	Col,
	Container,
	Image,
	Row,
	Table
} from 'react-bootstrap'
import image from './../Images/kholi 48th century.PNG'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import LoadingSpinner from './../Components/LoadingSpinner/LoadingSpinner'
// import { useGetClassesQuery } from '../store/ClassApiSlice'
// import { classes } from './../DummyData'
import img1 from './../assets/annie-spratt-dWYU3i-mqEo-unsplash.jpg'
import img2 from './../assets/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg'
import img3 from './../assets/huy-nguyen-YhP-E5YwOGE-unsplash.jpg'
import { useGetClassesQuery } from '../store/classApiSlice'
import { separateDataByYear } from '../Utils/Functions'
const Class = () => {
	const navigate = useNavigate()
	const [showYear, setShowYear] = useState(false)
	const [selectedYear, setSelectedYear] = useState()
	const [selectedClass, setSelectedClass] = useState()
	const [showBatch, setShowBatch] = useState(false)
	const { keyword, pageNumber } = useParams()

	const {
		data: classes,
		refetch,
		isLoading,
		error,
		isSuccess
	} = useGetClassesQuery()

	// } = useGetClassesQuery({keyword,		pageNumber	})

	// Assuming 'classes' array is defined as per your example

	// Function to separate data by year

	// Separate the 'classes' array by year
	const separatedData = separateDataByYear(classes)

	const filteredData = classes?.filter(data => data.year === selectedYear)

	const ViewStudentHandler = () => {
		navigate(`/student/${1}`)
	}

	const createClassHandler = () => {
		navigate('/class/add')
	}
	return (
		<Container
			style={{ paddingTop: '10vh', minHeight: '100vh' }}
			className="mx-auto position-relative">
			{/* {!isLoadingClass && ( */}

			<Row>
				<Carousel style={{ height: '60vh' }}>
					<Carousel.Item style={{ height: '60vh' }}>
						<Image
							text="First slide"
							src={img1}
							fluid
							style={{
								backgroundPosition: 'cover',
								backgroundRepeat: 'no-repeat'
							}}
							className="h-100 w-100"
						/>
					</Carousel.Item>
					<Carousel.Item style={{ height: '60vh' }}>
						<Image
							text="Second slide"
							src={img2}
							fluid
							style={{
								backgroundPosition: 'cover',
								backgroundRepeat: 'no-repeat'
							}}
							className="h-100 w-100"
						/>
					</Carousel.Item>
					<Carousel.Item style={{ height: '60vh' }}>
						<Image
							text="Third slide"
							src={img3}
							fluid
							style={{
								backgroundPosition: 'cover',
								backgroundRepeat: 'no-repeat'
							}}
							className="h-100 w-100"
						/>
					</Carousel.Item>
				</Carousel>
			</Row>

			{isLoading && <LoadingSpinner />}
			{!isLoading && (
				<Row className="mt-3">
					{!showBatch && !showYear && (
						<Table striped hover className="table-dark">
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
							<Table striped hover className="table-dark">
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
			)}

			{/* need to show student for this {selectedYear} {selectedClass}*/}
			{showBatch && showYear && !isLoading && (
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
				onClick={createClassHandler}
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

export default Class
