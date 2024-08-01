import React, { useEffect, useState } from 'react'
import styles from './CreateClassForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateClassMutation } from '../../store/classApiSlice'
import { getClasses } from '../../store/classSlice'
import { toast } from 'react-toastify'
import { Container, Form, FormControl, Row } from 'react-bootstrap'
import InputTag from '../InputTag'
import SelectTag from '../SelectTag'

const CreateClassForm = ({ header }) => {
	const [createClass, { isLoading, isError, isSuccess }] =
		useCreateClassMutation()
	const [formValid, setFormValid] = useState(true)
	const [formSubmit, setFormSubmit] = useState(false)
	const dispatch = useDispatch()

	// Initial state for inputs
	const initialInputsState = {
		name: { value: '', isValid: true },
		year: { value: null, isValid: true },
		teacher: { value: '', isValid: true },
		moniter: { value: '', isValid: true },
		narration: { value: '', isValid: true },
		totalStudents: { value: null, isValid: true },
		countBoys: { value: null, isValid: true },
		countGirls: { value: null, isValid: true }
	}

	// Generate an array of years (e.g., from 1950 to the current year)
	const years = Array.from(
		{ length: new Date().getFullYear() + 1 - 1950 },
		(_, i) => 1950 + i
	)

	// State for inputs
	const [inputs, setInputs] = useState(initialInputsState)

	useEffect(() => {
		const allFieldsValid = Object.values(inputs).every(input => input.isValid)
		setFormValid(allFieldsValid)
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		setInputs(currentInputs => ({
			...currentInputs,
			[inputType]: { value: enteredValue, isValid: true }
		}))
	}

	const submitHandler = async () => {
		const data = Object.fromEntries(
			Object.entries(inputs).map(([key, input]) => [key, input.value])
		)

		const nameValid = data.name?.trim().length > 0
		const yearValid = !isNaN(data.year) && +data.year > 0

		if (!nameValid || !yearValid) {
			setInputs(currentInputs => ({
				...currentInputs,
				name: { value: currentInputs.name.value, isValid: nameValid },
				year: { value: currentInputs.year.value, isValid: yearValid }
			}))
			return
		}

		try {
			const response = await createClass(data).unwrap()

			setFormSubmit(true)
			setInputs(initialInputsState)

			// Check if the response indicates success
			if (response && response.success) {
				dispatch(getClasses(response.classes))
				toast.success('Created Successfully!', { autoClose: 2000 })
			} else {
				toast.error('Creation failed. Please try again.', { autoClose: 2000 })
			}
		} catch (err) {
			toast.error('Error creating class', { autoClose: 2000 })
		}
	}

	return (
		<Container className={`container ${styles.container}`}>
			<h2 className={styles.header}>Create Class</h2>
			{!formValid && (
				<div className="row">
					<p
						className="text-warning text-capitalize"
						style={{ fontSize: '2vh' }}>
						Invalid Data Please check!
					</p>
				</div>
			)}
			<Form>
				<Row>
					<InputTag
						as="input"
						type="text"
						placeholder="Class Name"
						value={inputs.name.value}
						onChange={e => inputTextChangeHandler('name', e.target.value)}
					/>
				</Row>
				<Row>
					<SelectTag
						placeholder="Select Year"
						data={years}
						value={inputs.year.value}
						onChange={e => inputTextChangeHandler('year', e.target.value)}
					/>
					<SelectTag
						placeholder="Select Class Teacher"
						data={years}
						value={inputs.teacher.value}
						onChange={e => inputTextChangeHandler('teacher', e.target.value)}
					/>
				</Row>
				<Row className="form-row row">
					<SelectTag
						placeholder="Select Class Moniter"
						data={years}
						value={inputs.moniter.value}
						onChange={e => inputTextChangeHandler('moniter', e.target.value)}
					/>
					<InputTag
						as="input"
						type="number"
						placeholder="Total Students"
						value={inputs.totalStudents.value}
						onChange={e =>
							inputTextChangeHandler('totalStudents', e.target.value)
						}
					/>
				</Row>
				<Row className="form-row row">
					<InputTag
						as="input"
						type="number"
						placeholder="Total Boys"
						value={inputs.countBoys.value}
						onChange={e => inputTextChangeHandler('countBoys', e.target.value)}
					/>
					<InputTag
						as="input"
						type="number"
						placeholder="Total Girls"
						value={inputs.countGirls.value}
						onChange={e => inputTextChangeHandler('countGirls', e.target.value)}
					/>
				</Row>
				<Row className="form-row row">
					<div className="col-md-2 col-sm-6 my-1">
						<div className="form-group">
							<button
								type="button"
								className="btn btn-warning"
								onClick={submitHandler}
								disabled={isLoading}>
								Submit
							</button>
						</div>
					</div>
				</Row>
			</Form>
		</Container>
	)
}

export default CreateClassForm
