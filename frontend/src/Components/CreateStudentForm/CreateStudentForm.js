import React, { useEffect, useState } from 'react'
import styles from './CreateStudentForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Form, Row } from 'react-bootstrap'
// import { createUser } from '../../Actions/userAction'
const CreateStudentForm = ({ header }) => {
	const [formValid, setFormValid] = useState(true)
	// const notification = useSelector(state => state.customer.notification)
	const [formSubmit, setFormSubmit] = useState(false)
	const dispatch = useDispatch()
	// Initial state for inputs
	const initialInputsState = {
		firstName: { value: '', isValid: true },
		lastName: { value: '', isValid: true },
		narration: { value: '', isValid: true },
		phone: { value: '', isValid: true },
		address: { value: [], isValid: true },
		town: { value: '', isValid: true },
		dob: { value: '', isValid: true }
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

	const submitHandler = () => {
		const data = Object.fromEntries(
			Object.entries(inputs).map(([key, input]) => [key, input.value])
		)

		const firstNameValid = data.firstName?.trim().length > 0
		const lastNameValid = data.lastName?.trim().length > 0
		const phoneValid =
			data.phone?.trim().length > 9 && data.phone?.trim().length <= 10

		if (!firstNameValid || !lastNameValid || !phoneValid) {
			setInputs(currentInputs => {
				return {
					...currentInputs,
					name: {
						value: currentInputs.firstName.value,
						isValid: firstNameValid
					},
					lastName: {
						value: currentInputs.lastName.value,
						isValid: lastNameValid
					},
					phone: {
						value: currentInputs.phone.value,
						isValid: phoneValid
					}
				}
			})

			return
		}

		// dispatch(createUser(data))
		setFormSubmit(true)
		setInputs(initialInputsState)
	}
	return (
		<div className={`container ${styles.container} `}>
			<h2 class="row col-md-12 col-sm-6" className={styles.header}>
				Create Student
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
					<Form.Group controlId="firstName" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="text"
							class="form-control"
							placeholder="firstName"
							value={inputs.firstName.value}
							onChange={e =>
								inputTextChangeHandler('firstName', e.target.value)
							}
						/>
					</Form.Group>

					<Form.Group controlId="lastName" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="text"
							class="form-control"
							placeholder="lastName"
							value={inputs.lastName.value}
							onChange={e => inputTextChangeHandler('lastName', e.target.value)}
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group controlId="phone" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="number"
							class="form-control"
							placeholder="phone"
							value={inputs.phone.value}
							onChange={e => inputTextChangeHandler('phone', e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="address" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="text"
							class="form-control"
							placeholder="Address"
							value={inputs.address.value}
							onChange={e => inputTextChangeHandler('address', e.target.value)}
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group controlId="town" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="text"
							class="form-control"
							placeholder="Town"
							value={inputs.town.value}
							onChange={e => inputTextChangeHandler('town', e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="DOB" className="col-12 col-md-6 mb-2">
						<Form.Control
							as="input"
							type="date"
							placeholder="DOB"
							value={inputs.dob.value}
							onChange={e => inputTextChangeHandler('dob', e.target.value)}
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
		</div>
	)
}

export default CreateStudentForm
