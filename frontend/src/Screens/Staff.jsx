import React, { useState } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Image,
	Row
} from 'react-bootstrap'
import image from './../Images/kholi 48th century.PNG'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Staff = () => {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
	const navigate = useNavigate()

	// Generate an array of years (e.g., from 2000 to current year)
	const years = Array.from({ length: 15 }, (_, i) => 2010 + i)

	// Handle year selection
	const handleYearSelect = year => {
		setSelectedYear(year)
	}

	const createStaffHandler = () => {
		navigate('/staff/add')
	}
	return (
		<Container
			fluid
			className="position-relative"
			style={{ paddingTop: '8vh', minHeight: '100vh' }}>
			<Row className="my-2 mx-auto">
				<Row className="d-flex justify-content-between align-items-center">
					<DropdownButton
						className="rounded d-inline-block"
						id="dropdown-item-button"
						title={`${selectedYear} Staffs`}>
						{years.map(year => (
							<Dropdown.Item
								as="button"
								key={year}
								onClick={() => handleYearSelect(year)}>
								{year}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</Row>
				<Container>
					<Row className="my-2">
						<Col md={3} lg={4}>
							<Image src={image} fluid />
							<h3 className="text-center">Principle</h3>
						</Col>

						<Col md={3} lg={4}>
							<Image src={image} fluid />
							<h3 className="text-center">Vice Principle</h3>
						</Col>

						<Col md={3} lg={4}>
							<Image src={image} fluid />
							<h3 className="text-center">Dupity Principle</h3>
						</Col>
					</Row>
					<Row>
						<Row>
							<h3>Staffs</h3>
						</Row>
						<Row>
							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col sm={6} md={4} lg={3} className="mt-2">
								<Card>
									<Card.Img variant="top" src={image} />
									<Card.Body>
										<Card.Title>Mohammed Rifkhan</Card.Title>
										<Card.Text>
											Science,Maths <br /> Bsc in Computer Science
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Row>

					<Row>
						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col sm={6} md={4} lg={3} className="mt-2">
							<Card>
								<Card.Img variant="top" src={image} />
								<Card.Body>
									<Card.Title>Mohammed Rifkhan</Card.Title>
									<Card.Text>
										Science,Maths <br /> Bsc in Computer Science
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Row>

			<Button
				onClick={createStaffHandler}
				className="btn-warning position-fixed rounded-5 p-3 "
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

export default Staff
