import React, { useState, useRef } from 'react'
import {
	Button,
	Card,
	Carousel,
	Col,
	Container,
	Image,
	ListGroup,
	Row
} from 'react-bootstrap'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img1 from './../assets/annie-spratt-dWYU3i-mqEo-unsplash.jpg'
import img2 from './../assets/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg'
import img3 from './../assets/huy-nguyen-YhP-E5YwOGE-unsplash.jpg'

import { updates, news } from './../DummyData'
import ViewModel from '../Components/UpdateModel/UpdateModel'
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

const Home = () => {
	const [showModal, setShowModal] = useState(false)
	const [selectedData, setSelectedData] = useState()
	const handleModel = () => {
		setShowModal(current => !current)
	}

	return (
		<Container style={{ paddingTop: '8vh', minHeight: '100vh' }} fluid>
			{/* carousel */}

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

			{/* cards */}
			<Container className="mx-auto my-2 ">
				<Row className="d-flex ">
					<Col
						sm={5}
						lg={2}
						className="mx-auto m-1 d-flex justify-content-center

						align-items-center text-center text-bg-dark rounded"
						style={{ minHeight: '5vh' }}>
						<h5 className="m-auto">Current Students</h5>
					</Col>
					{/* <Card>
						<Card.Body>
							<Card.Title as='h4'>
								Current Students
							</Card.Title>
						</Card.Body>
					</Card> */}
					<Col
						sm={5}
						lg={2}
						className="mx-auto m-1 d-flex justify-content-center align-items-center text-center text-bg-dark rounded"
						style={{ minHeight: '5vh' }}>
						<h5 className="m-auto">Teachers</h5>
					</Col>
					<Col
						sm={5}
						lg={2}
						className="mx-auto m-1 d-flex justify-content-center align-items-center text-center text-bg-dark rounded"
						style={{ minHeight: '5vh' }}>
						<h5 className="m-auto">Classes</h5>
					</Col>
					<Col
						sm={5}
						lg={2}
						className="mx-auto m-1 d-flex justify-content-center align-items-center text-center text-bg-dark rounded"
						style={{ minHeight: '5vh' }}>
						<h5 className="m-0 w-100">Total Students</h5>
					</Col>
				</Row>
			</Container>

			{/* recent updates and news  */}

			<Row className="mx-auto my-2">
				<Col
					sm={7}
					className="mx-auto my-2 "
					style={{
						background: 'rgba(125, 242, 242, 0.15)',
						borderRadius: '10px',
						border: '1px solid rgba( 0, 0, 0, 0.18 )'
					}}>
					<h3>Recent Updates</h3>
					<ListGroup variant="flush">
						{updates.slice(0, 10).map(update => (
							<ListGroup.Item
								onClick={() => {
									handleModel()
									setSelectedData(update)
								}}
								key={update.id}
								style={{ cursor: 'pointer ' }}>
								<h6>{update.title}</h6>
							</ListGroup.Item>
						))}

						{updates.length > 10 && (
							<ListGroup.Item>
								<h6 className="text-end " style={{ cursor: 'pointer' }}>
									More <FaArrowRight />
								</h6>
							</ListGroup.Item>
						)}
					</ListGroup>
				</Col>

				<Col
					className="m-2 "
					style={{
						background: 'rgba(125, 242, 242, 0.15)',
						borderRadius: '10px',
						border: '1px solid rgba( 0, 0, 0, 0.18 )'
					}}>
					<h3>News</h3>
					<ListGroup variant="flush">
						{news.slice(0, 9).map(update => (
							<ListGroup.Item
								onClick={() => {
									handleModel()
									setSelectedData(update)
								}}
								key={update.id}
								style={{ cursor: 'pointer ' }}>
								<h6>{update.title}</h6>
							</ListGroup.Item>
						))}
						{news.length > 10 && (
							<ListGroup.Item>
								<h6 className="text-end " style={{ cursor: 'pointer ' }}>
									More <FaArrowRight />
								</h6>
							</ListGroup.Item>
						)}
					</ListGroup>
				</Col>
			</Row>

			<ViewModel
				showModal={showModal}
				closeHandler={handleModel}
				data={selectedData}
			/>
		</Container>
	)
}

export default Home
