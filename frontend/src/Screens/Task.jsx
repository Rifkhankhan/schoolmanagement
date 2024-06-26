import React, { useState, useRef } from 'react'
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

import image from './../Images/kholi 48th century.PNG'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
// import { useGetClassesQuery } from '../store/ClassApiSlice'
import { classes } from '../DummyData'
import SubHeader from '../Components/SubHeader/SubHeader'
import CreateTaskForm from '../Components/CreateTaskForm/CreateTaskForm'
import RecentTaskTable from '../Components/RecentTaskTable/RecentTaskTable'
import StudentTable from '../Components/StudentTable/StudentTable'
import TaskTable from '../Components/TaskTable/TaskTable'
import ShowTaskModal from '../Components/ShowTaskModal/ShowTaskModal'

const Task = () => {
	const navigate = useNavigate()
	const [taskName, setTaskName] = useState()

	const [showModal, setShowModal] = useState(false)

	const { keyword, pageNumber } = useParams()

	// const {
	// 	data: classes,
	// 	isLoading: isLoadingClass,
	// 	error: classError
	// } = useGetClassesQuery({
	// 	keyword,
	// 	pageNumber
	// })

	const ViewStudentHandler = () => {
		navigate(`/student/${1}`)
	}

	const createStudentHandler = () => {
		navigate('/student/add')
	}

	const handleModel = item => {
		console.log(item)
		setShowModal(prev => !prev)
	}

	const closeHandler = () => {
		setShowModal(prev => !prev)
	}

	return (
		<Container fluid>
			<SubHeader setTaskName={setTaskName} />
			<Container style={{ paddingTop: '14vh' }} fluid>
				<Row className="d-flex justify-content-between  my-2 mx-auto">
					<Col md={6}>
						<CreateTaskForm taskName={taskName} />
					</Col>

					{/* recently added staffs */}
					<Col md={6}>
						<RecentTaskTable taskName={taskName} />
					</Col>
				</Row>

				<Row>
					<TaskTable handleModel={handleModel} />
				</Row>
			</Container>

			<ShowTaskModal
				showModal={showModal}
				closeHandler={closeHandler}
				handleModel={handleModel}
			/>
		</Container>
	)
}

export default Task
