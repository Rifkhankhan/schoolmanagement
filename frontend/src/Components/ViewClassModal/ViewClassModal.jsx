import React, { useEffect, useState } from 'react'
import {
	Button,
	Col,
	Form,
	FormGroup,
	FormLabel,
	Image,
	ListGroup,
	Modal,
	Row,
	Spinner
} from 'react-bootstrap'
import image from './../../Images/kholi 48th century.PNG'
import { toast } from 'react-toastify'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faClose,
	faDownload,
	faPager,
	faPen,
	faPrint,
	faTrash
} from '@fortawesome/free-solid-svg-icons'
import InputTag from '../InputTag'
import SelectTag from '../SelectTag'
import {
	useDeleteClassMutation,
	useUpdateClassMutation
} from '../../store/classApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../../store/classSlice'

const ViewClassModal = ({ showModal, closeHandler, datas, refetch }) => {
	const dispatch = useDispatch()

	const [showEditModal, setShowEditModal] = useState(false)
	const [formSubmit, setFormSubmit] = useState(false)
	const [formValid, setFormValid] = useState(true)
	const [updateClass, { isLoading, isError }] = useUpdateClassMutation()
	const [deleteClass, { isLoading: deleteIsLoading, isError: deleteIsError }] =
		useDeleteClassMutation()

	const initialInputsState = {
		name: {
			value: datas?.name,
			isValid: true
		},
		year: { value: datas?.year, isValid: true },
		countBoys: { value: +datas?.countBoys, isValid: true },
		countGirls: { value: +datas?.countGirls, isValid: true },
		totalStudents: { value: +datas?.totalStudents, isValid: true }
	}

	const [inputs, setInputs] = useState(initialInputsState)
	const years = Array.from(
		{ length: Number(new Date().getFullYear()) + 1 - 1950 },
		(_, i) => 1950 + i
	)
	useEffect(() => {
		setFormValid(
			inputs?.name?.isValid &&
				inputs?.year?.isValid &&
				inputs?.countGirls?.isValid &&
				inputs?.countBoys?.isValid &&
				inputs?.totalStudents?.isValid
		)

		return () => {}
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		setInputs(currentInputValue => {
			return {
				...currentInputValue,
				[inputType]: { value: enteredValue, isValid: true }
			}
		})
	}

	const submitHandler = async e => {
		e.preventDefault()
		const data = Object.fromEntries(
			Object.entries(inputs).map(([key, input]) => [key, input.value])
		)

		const nameValid = data?.name.trim().length > 0
		const yearValid =
			+data?.year !== null &&
			+data?.year !== undefined &&
			!isNaN(+data?.year) &&
			+data?.year > 0

		if (
			!nameValid ||
			!yearValid ||
			!(+data?.countBoys > 0) ||
			!(+data?.totalStudents > 0) ||
			!(+data?.countGirls > 0)
		) {
			setInputs(currentInputs => {
				return {
					...currentInputs,
					name: { value: currentInputs.name?.value, isValid: nameValid },
					year: { value: +currentInputs.year?.value, isValid: yearValid },
					countBoys: {
						value: +currentInputs.countBoys?.value,
						isValid: +data?.countBoys > 0
					},
					countGirls: {
						value: +currentInputs.countGirls?.value,
						isValid: +data?.countGirls > 0
					},
					totalStudents: {
						value: +currentInputs.totalStudents?.value,
						isValid: +data?.totalStudents > 0
					}
				}
			})

			return
		}

		try {
			const newData = { ...data, classId: datas.classId }

			const response = await updateClass(newData).unwrap()

			if (response && response.success) {
				dispatch(getClasses(response.classes))
				toast.success('Updated Successfully!', { autoClose: 2000 })
				refetch()
				setFormSubmit(true)
				setInputs(initialInputsState)
				closeHandler()
			} else {
				toast.error('Updatetion failed. Please try again.', { autoClose: 2000 })
			}
		} catch (err) {
			console.log(err)
			toast.error(err?.data?.message || err?.error)
		}
	}

	const deleteHandler = async id => {
		try {
			const response = await deleteClass(id).unwrap()

			if (response && response.success) {
				dispatch(getClasses(response.classes))
				toast.success('Deleted Successfully!', { autoClose: 2000 })
				refetch()
			} else {
				toast.error('Deletion failed. Please try again.', { autoClose: 2000 })
			}
		} catch (error) {
			console.log(error)
		}
		closeHandler()
	}

	return (
		<>
			<Modal
				show={showModal && !showEditModal}
				onHide={closeHandler}
				centered
				size="lg">
				<Modal.Header
					style={{
						backgroundColor: '#7993d2'
					}}>
					<Modal.Title className="w-100">
						<span className="fs-3 mx-auto text-capitalize text-center">
							View Class
						</span>
						<FontAwesomeIcon
							style={{ cursor: 'pointer' }}
							icon={faPen}
							onClick={() => setShowEditModal(prev => !prev)}
							className="float-end my-auto text-dark"
						/>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<FormGroup variant="flush">
								<FormLabel>Class Name : </FormLabel>
								<FormLabel>{inputs?.name?.value}</FormLabel>
							</FormGroup>
						</ListGroup.Item>

						<ListGroup.Item>
							<FormGroup variant="flush">
								<FormLabel>Year : </FormLabel>
								<FormLabel>{inputs?.year?.value}</FormLabel>
							</FormGroup>
						</ListGroup.Item>

						<ListGroup.Item>
							<FormGroup variant="flush">
								<FormLabel>Boyes : </FormLabel>
								<FormLabel>{inputs?.countBoys?.value}</FormLabel>
							</FormGroup>
						</ListGroup.Item>

						<ListGroup.Item>
							<FormGroup variant="flush">
								<FormLabel>Girls : </FormLabel>
								<FormLabel>{inputs?.countGirls?.value}</FormLabel>
							</FormGroup>
						</ListGroup.Item>

						<ListGroup.Item>
							<FormGroup variant="flush">
								<FormLabel>Total Students : </FormLabel>
								<FormLabel>{inputs?.totalStudents?.value}</FormLabel>
							</FormGroup>
						</ListGroup.Item>
					</ListGroup>
				</Modal.Body>

				<Modal.Footer>
					<Button
						className="bg-danger d-flex"
						onClick={() => deleteHandler(datas.classId)}>
						<FontAwesomeIcon
							style={{ cursor: 'pointer' }}
							icon={faTrash}
							className="float-end my-auto text-dark"
						/>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal
				show={showModal && showEditModal}
				onHide={closeHandler}
				centered
				size="lg">
				<Modal.Header
					style={{
						backgroundColor: '#7993d2'
					}}>
					<Modal.Title className="w-100">
						<span className="fs-3 mx-auto text-capitalize text-center">
							Edit Class
						</span>
						<FontAwesomeIcon
							style={{ cursor: 'pointer' }}
							icon={faClose}
							onClick={closeHandler}
							className="float-end my-auto text-danger"
						/>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={submitHandler}>
						{!formValid && (
							<Row style={{ paddingBlock: '0px', marginBlock: '0px' }}>
								<p
									className="text-danger text-capitalize  "
									style={{
										fontSize: '3vh',
										textAlign: 'center',
										paddingBlock: '0px',
										marginBlock: '0px'
									}}>
									Invalid Data Please check!
								</p>
							</Row>
						)}
						<Row>
							<InputTag
								as="input"
								label="Class Name"
								placeholder={inputs?.name.value}
								type="text"
								value={inputs?.name.value}
								onChange={e => inputTextChangeHandler('name', e.target.value)}
							/>

							<SelectTag
								label="Year"
								data={years}
								onChange={e => inputTextChangeHandler('year', e.target.value)}
								value={inputs?.year.value}
								placeholder={inputs?.year.value}
							/>
						</Row>

						<Row>
							<InputTag
								as="input"
								label="Boyes"
								placeholder={inputs?.countBoys.value}
								type="numer"
								value={inputs?.countBoys.value}
								onChange={e =>
									inputTextChangeHandler('countBoys', e.target.value)
								}
							/>

							<InputTag
								as="input"
								label="Girls"
								placeholder={inputs?.countGirls.value}
								type="numer"
								value={inputs?.countGirls.value}
								onChange={e =>
									inputTextChangeHandler('countGirls', e.target.value)
								}
							/>
						</Row>

						<Row>
							<InputTag
								as="input"
								label="Total Students"
								placeholder={inputs?.totalStudents.value}
								type="numer"
								value={inputs?.totalStudents.value}
								onChange={e =>
									inputTextChangeHandler('totalStudents', e.target.value)
								}
							/>

							<Button type="submit">Submit</Button>
						</Row>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ViewClassModal
