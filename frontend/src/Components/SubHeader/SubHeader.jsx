import React, { useState, useRef, useEffect } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Image,
	ListGroup,
	Row,
	Table
} from 'react-bootstrap'

import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './SubHeader.module.css'

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

const SubHeader = ({ setTaskName }) => {
	const scrollContainerRef = useRef(null)
	const [selectedActivity, setSelectedActivity] = useState(0)

	useEffect(() => {
		setTaskName(activities[selectedActivity])
	}, [selectedActivity])
	const scrollLeft = () => {
		scrollContainerRef.current.scrollBy({
			top: 0,
			left: -150,
			behavior: 'smooth'
		})
	}

	const scrollRight = () => {
		scrollContainerRef.current.scrollBy({
			top: 0,
			left: 150,
			behavior: 'smooth'
		})
	}
	return (
		<Container
			className="d-flex position-fixed z-1 text-bg-dark"
			style={{
				top: '65px',
				left: 0,
				right: 0
			}}>
			<Button
				variant="dark"
				onClick={scrollLeft}
				className="py-2 m-0  border-end border-start-light">
				<FaChevronLeft />
			</Button>
			<Row
				ref={scrollContainerRef}
				style={{
					overflowX: 'hidden',
					whiteSpace: 'nowrap',
					scrollBehavior: 'smooth',
					flexWrap: 'nowrap',
					margin: 'auto 10px'
				}}>
				{activities.map((activity, index) => (
					<Col
						className={
							selectedActivity === index
								? `${styles.selectedCol}`
								: `${styles.col}`
						}
						onClick={() => setSelectedActivity(index)}
						xs="auto"
						key={index}
						style={{
							display: 'inline-block',
							cursor: 'pointer'
						}}>
						{activity}
					</Col>
				))}
			</Row>
			<Button
				variant="dark"
				onClick={scrollRight}
				className="py-2 m-0  border-start border-end-light">
				<FaChevronRight />
			</Button>
		</Container>
	)
}

export default SubHeader
