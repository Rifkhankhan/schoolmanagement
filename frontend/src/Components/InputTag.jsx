import React from 'react'
import { Form, FormLabel } from 'react-bootstrap'
const InputTag = ({ as, type, placeholder, id, value, onChange, label }) => {
	return (
		<Form.Group controlId="title" className="col-12 col-md-6 mb-2">
			{label && <FormLabel>{label} : </FormLabel>}

			<Form.Control
				as={as}
				type={type}
				placeholder={placeholder}
				id={id}
				value={value}
				onChange={onChange}
			/>
		</Form.Group>
	)
}

export default InputTag
