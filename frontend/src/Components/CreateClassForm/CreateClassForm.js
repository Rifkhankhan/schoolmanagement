import React, { useEffect, useState } from 'react'
import styles from './CreateClassForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { createUser } from '../../Actions/userAction'
const CreateClassForm = ({ header }) => {
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

	// Generate an array of years (e.g., from 2000 to current year)
	const years = Array.from(
		{ length: Number(new Date().getFullYear()) + 1 - 1950 },
		(_, i) => 1950 + i
	)

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

		const nameValid = data.name?.trim().length > 0
		const yearValid =
			data.year !== null && data.year !== undefined && !isNaN(data.year)

		if (!nameValid || !yearValid) {
			setInputs(currentInputs => {
				return {
					...currentInputs,
					name: { value: currentInputs.name.value, isValid: nameValid },
					year: { value: +currentInputs.year.value, isValid: yearValid }
				}
			})
			return
		}

		console.log(data)

		// dispatch(createUser(data))
		setFormSubmit(true)
		setInputs(initialInputsState)
	}
	return (
		<div className={`container ${styles.container} `}>
			<h2 class="row col-md-12 col-sm-6" className={styles.header}>
				Create Class
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

			<form class="form">
				{/* forms row start */}
				<div class="form-row row">
					<div class="form-group col-12 col-md-6 mb-2">
						<input
							type="text"
							class="form-control"
							placeholder="Class Name"
							id="name"
							value={inputs.name.value}
							onChange={e => inputTextChangeHandler('name', e.target.value)}
						/>
					</div>
				</div>
				<div class="form-row row">
					{/* year */}
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.year.value}
							onChange={e => inputTextChangeHandler('year', e.target.value)}
							id="inputGroupSelect01">
							<option selected value="no">
								Select Year
							</option>

							{years.map(year => (
								<option value={year}>{year}</option>
							))}
						</select>
					</div>

					{/* teacher */}
					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.teacher.value}
							onChange={e => inputTextChangeHandler('teacher', e.target.value)}
							id="inputGroupSelect01">
							<option selected value="no">
								Select Class Teacher
							</option>
							{years.map(year => (
								<option value={year}>{year}</option>
							))}
						</select>
					</div>
				</div>
				<div class="form-row row">
					{/* monitor */}

					<div class="form-group col-12 col-md-6 mb-2">
						<select
							class="form-control"
							value={inputs.moniter.value}
							onChange={e => inputTextChangeHandler('moniter', e.target.value)}
							id="inputGroupSelect01">
							<option selected value="no">
								Select Class Moniter
							</option>
							{years.map(year => (
								<option value={year}>{year}</option>
							))}
						</select>
					</div>
					{/* totalStudents */}

					<div class="form-group col-12 col-md-6 mb-2">
						<input
							type="number"
							class="form-control"
							placeholder="Total Students"
							id="name"
							value={inputs.totalStudents.value}
							onChange={e =>
								inputTextChangeHandler('totalStudents', e.target.value)
							}
						/>
					</div>
				</div>
				<div class="form-row row">
					{/* countBoys */}

					<div class="form-group col-12 col-md-6 mb-2">
						<input
							type="number"
							class="form-control"
							placeholder="Total Boys"
							id="name"
							value={inputs.countBoys.value}
							onChange={e =>
								inputTextChangeHandler('countBoys', e.target.value)
							}
						/>
					</div>
					{/* countGirls */}

					<div class="form-group col-12 col-md-6 mb-2">
						<input
							type="number"
							class="form-control"
							placeholder="Total Girls"
							id="name"
							value={inputs.countGirls.value}
							onChange={e =>
								inputTextChangeHandler('countGirls', e.target.value)
							}
						/>
					</div>
				</div>
				<div class="form-row row">
					<div class="col-md-2 col-sm-6 my-1">
						<div class="form-group">
							<button
								type="button"
								className="btn btn-warning "
								onClick={submitHandler}>
								Submit
							</button>
						</div>
					</div>
				</div>
				)
			</form>
		</div>
	)
}

export default CreateClassForm
