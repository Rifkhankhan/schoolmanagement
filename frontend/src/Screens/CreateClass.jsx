import React, { useEffect, useState } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	ListGroup,
	Modal,
	Row
} from 'react-bootstrap'

import CreateClassForm from '../Components/CreateClassForm/CreateClassForm'
import ClassTable from '../Components/ClassTable/ClassTable'
import RecentClassTable from '../Components/RecentClassTable/RecentClassTable'
import { useGetClassesQuery } from '../store/classApiSlice'

import ViewClassModal from '../Components/ViewClassModal/ViewClassModal'
import { useSelector } from 'react-redux'

const CreateClass = () => {
	const { data: classes, refetch, isLoading, error } = useGetClassesQuery()

	const [showModal, setShowModal] = useState(false)
	const [selectedClass, setSelectedClass] = useState()

	useEffect(() => {}, [classes])

	const handleModal = item => {
		setSelectedClass(item)

		setShowModal(prev => !prev)
	}

	const closeHandler = () => {
		setShowModal(prev => !prev)
	}
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
				<Col md={6}>{!isLoading && <RecentClassTable classes={classes} />}</Col>
			</Row>

			<Row>
				{!isLoading && (
					<ClassTable classes={classes} handleModel={handleModal} />
				)}
			</Row>

			{showModal && (
				<ViewClassModal
					datas={selectedClass}
					showModal={showModal}
					closeHandler={closeHandler}
					refetch={refetch}
				/>
			)}
		</Container>
	)
}

export default CreateClass
