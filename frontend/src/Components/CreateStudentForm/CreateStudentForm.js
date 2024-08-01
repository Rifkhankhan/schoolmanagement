import React, { useEffect, useState } from 'react'
import styles from './CreateStudentForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { useCreateClassMutation } from '../../store/studet'
import { getClasses } from '../../store/classSlice'
import { toast } from 'react-toastify'
import { Container, Form, FormControl, FormSelect, Row } from 'react-bootstrap'
import InputTag from '../InputTag'
import SelectTag from '../SelectTag'
import { getRoles } from '../../Actions/AuthAction'
import { createStudent } from '../../Actions/StudentActions'
import { useGetClassesQuery } from './../../store/classApiSlice'
const CreateStudentForm = ({ header }) => {
	const [formValid, setFormValid] = useState(true)
	const roles = useSelector(state => state.auth.roles)
	const { data: classes, isLoading, isError } = useGetClassesQuery()

	const [formSubmit, setFormSubmit] = useState(false)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRoles())
	}, [])
	// Initial state for inputs
	const initialInputsState = {
		firstName: { value: '', isValid: true },
		lastName: { value: '', isValid: true },
		narration: { value: '', isValid: true },
		roleId: { value: '', isValid: true },
		classId: { value: '', isValid: true }
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
		const roleValid = Number.isInteger(+data.roleId) && +data.roleId > 0

		const classValid = Number.isInteger(+data.classId) && +data.classId > 0
		const lastNameValid = data.lastName?.trim().length > 0

		if (!firstNameValid || !lastNameValid || !roleValid || !classValid) {
			setInputs(currentInputs => {
				return {
					...currentInputs,
					firstName: {
						value: currentInputs.firstName.value,
						isValid: firstNameValid
					},
					lastName: {
						value: currentInputs.lastName.value,
						isValid: lastNameValid
					},
					classId: {
						value: currentInputs.classId.value,
						isValid: classValid
					},
					roleId: {
						value: currentInputs.roleId.value,
						isValid: roleValid
					}
				}
			})

			return
		}

		dispatch(createStudent(data))
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
					<Form.Group className="col-12 col-md-6 mb-2">
						<Form.Select
							value={inputs.roleId.value}
							onChange={e => inputTextChangeHandler('roleId', e.target.value)}>
							<option value={0}>Select Role</option>

							{roles.map(role => (
								<option value={role.roleId} key={role.roleId}>
									{role.roleName}
								</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className="col-12 col-md-6 mb-2">
						<Form.Select
							value={inputs.classId.value}
							onChange={e => inputTextChangeHandler('classId', e.target.value)}>
							<option value={0}>Select Class</option>

							{classes.map(role => (
								<option value={role.classId} key={role.classId}>
									{role.year} : {role.name}
								</option>
							))}
						</Form.Select>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group>
						<Form.Control
							as="textarea"
							type="text"
							rows={3}
							class="form-control"
							placeholder="narration"
							value={inputs.narration.value}
							onChange={e =>
								inputTextChangeHandler('narration', e.target.value)
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
		</div>
	)
}

export default CreateStudentForm
