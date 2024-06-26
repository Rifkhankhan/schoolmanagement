import React, { useEffect, useRef, useState } from 'react'
import styles from './CreateTaskForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Form, Image, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faClose,
	faDownload,
	faPager,
	faPen,
	faPrint
} from '@fortawesome/free-solid-svg-icons'
import PreviewModal from '../PreviewModal/PreviewModal'
// import { createUser } from '../../Actions/userAction'
const CreateTaskForm = ({ taskName }) => {
	console.log(taskName)

	const [formValid, setFormValid] = useState(true)
	// const notification = useSelector(state => state.customer.notification)
	const [formSubmit, setFormSubmit] = useState(false)
	const dispatch = useDispatch()

	const [file, setFile] = useState(null)
	const filePickerRef = useRef()
	const [previewUrl, setPreviewUrl] = useState()
	const [showModal, setShowModal] = useState(false)

	// Initial state for inputs
	const initialInputsState = {
		title: { value: '', isValid: true },
		category: { value: taskName, isValid: true },
		Description: { value: '', isValid: true },
		dueDate: { value: '', isValid: true }
	}

	// State for inputs
	const [inputs, setInputs] = useState(initialInputsState)

	useEffect(() => {
		const allFieldsValid = Object.values(inputs).every(input => input.isValid)
		setFormValid(allFieldsValid)
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		setInputs(currentInputValue => {
			return {
				...currentInputValue,
				[inputType]: { value: enteredValue, isValid: true }
			}
		})
	}

	const closeHandler = () => {
		setFile(null)
		setShowModal(prev => !prev)
	}

	const okHandler = () => {
		setShowModal(prev => !prev)
	}

	const submitHandler = () => {
		const data = Object.fromEntries(
			Object.entries(inputs).map(([key, input]) => [key, input.value])
		)

		const titleValid = data.title?.trim().length > 0

		const dueDateValid = data.dueDate?.trim().length > 0
		const phoneValid =
			data.phone?.trim().length > 9 && data.phone?.trim().length <= 10

		if (!titleValid || !dueDateValid) {
			setInputs(currentInputs => {
				return {
					...currentInputs,
					title: {
						value: currentInputs.title.value,
						isValid: titleValid
					},

					dueDate: {
						value: currentInputs.dueDate.value,
						isValid: dueDateValid
					}
				}
			})

			return
		}

		const formData = new FormData()

		// dispatch(createUser(data))
		setFormSubmit(true)
		setInputs(initialInputsState)
	}

	// file uploading
	useEffect(() => {
		if (!file) {
			return
		}

		const fileReader = new FileReader()
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result)
			setShowModal(prev => !prev)
		}
		fileReader.readAsDataURL(file)
	}, [file])

	const pickHandler = e => {
		let pickedFile

		if (e.target.files && e.target.files.length === 1) {
			pickedFile = e.target.files[0]
			setFile(pickedFile)
		}
	}
	const pickImageHandler = () => {
		filePickerRef.current.click()
	}

	return (
		<Container className={`container ${styles.container} `}>
			<h2 class="row col-md-12 col-sm-6" className={styles.header}>
				Create {taskName ?? '...'}
			</h2>
			{!formValid && (
				<div className="row ">
					<p
						className="text-warning text-capitalize  "
						style={{ fontSize: '2vh' }}>
						Invalid Data Please check!
					</p>
				</div>
			)}

			<Form class="form">
				{/* forms row start */}
				<Row>
					<Form.Group controlId="title" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="text"
							class="form-control"
							placeholder="Title"
							value={inputs.title.value}
							onChange={e => inputTextChangeHandler('title', e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="Category" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="text"
							class="form-control"
							value={taskName ?? ''}
							disabled
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group controlId="dueDate" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="date"
							class="form-control"
							placeholder="Due Date"
							value={inputs.dueDate.value}
							onChange={e => inputTextChangeHandler('dueDate', e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="DOB" className="col-12 col-md-6 mb-2">
						<input
							type="file"
							name=""
							value=""
							style={{ display: 'none' }}
							accept=".jpg,.png,.jpeg,.pdf"
							onChange={pickHandler}
							ref={filePickerRef}
						/>
						<button
							type="button"
							onClick={pickImageHandler}
							class="btn btn-danger "
							style={{ width: '100%' }}>
							<span
								style={{
									marginRight: 'auto',
									color: 'black',
									float: 'left'
								}}>
								jpg / png
							</span>
							{!file ? 'Upload File' : 'File Uploaded'}
							<span
								style={{
									marginLeft: 'auto',
									color: 'black',
									float: 'right'
								}}>
								pdf / jpeg
							</span>
						</button>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group controlId="dueDate" className="col-12  mb-2">
						<Form.Control
							as="textarea"
							rows={3}
							type="textarea"
							class="form-control"
							placeholder="Description"
							value={inputs.Description.value}
							onChange={e =>
								inputTextChangeHandler('Description', e.target.value)
							}
						/>
					</Form.Group>
				</Row>
				<Row>
					<div class="col-md-2 col-sm-6 my-1">
						<div class="form-group">
							<button
								type="button"
								className="btn btn-primary "
								onClick={submitHandler}>
								Submit
							</button>
						</div>
					</div>
				</Row>
				)
			</Form>

			<PreviewModal
				showModal={showModal}
				closeHandler={closeHandler}
				okHandler={okHandler}
				image={previewUrl}
			/>
		</Container>
	)
}

export default CreateTaskForm
