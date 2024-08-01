import React from 'react'
import { Form, FormLabel } from 'react-bootstrap'
const SelectTag = ({
	placeholder,
	data,
	value,
	onChange,
	label,
	dataSet,
	name,
	id
}) => {
	console.log(data)
	return (
		<Form.Group className="col-12 col-md-6 mb-2">
			{label && <FormLabel>{label} : </FormLabel>}

			{data && (
				<Form.Select value={value} onChange={onChange}>
					<option>{placeholder}</option>
					{data?.map(d => (
						<option value={d} key={d}>
							{d}
						</option>
					))}
				</Form.Select>
			)}

			{dataSet && (
				<Form.Select value={value} onChange={onChange}>
					<option>{placeholder}</option>
					{data?.map(d => (
						<option value={d[id]} key={d.id}>
							{d[name]}
						</option>
					))}
				</Form.Select>
			)}
		</Form.Group>
	)
}

export default SelectTag
