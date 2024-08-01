import React, { useEffect, useState } from 'react'
import styles from './RecentClassTable.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap'
const RecentClassTable = ({ classes }) => {
	const [filter, setFilter] = useState('')
	const [reverseClass, setReverseClass] = useState()

	useEffect(() => {
		const revArry = [...classes].reverse()

		setReverseClass(revArry)
	}, [classes])

	const handleFilterChange = event => {
		setFilter(event.target.value)
	}
	return (
		<div className={`container ${styles.tableContainer}`}>
			<h4>Recenlty Created Class</h4>
			{/* <input
				type="text"
				value={filter}
				onChange={handleFilterChange}
				className={`form-control mb-3 col-12 col-md-6 ${styles.inputTag}`}
				placeholder="Search Class By Name"
			/> */}
			<table className="table table-hover thead-dark w-100 f-1">
				<thead className="thead-dark">
					<tr>
						<th>#</th>
						<th>Name</th>

						<th>Year</th>
						<th>Boys</th>
						<th>Girsl</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{reverseClass?.slice(0, 5).map(
						(item, index) =>
							item.name?.toLowerCase().includes(filter.toLowerCase()) && (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>Grade {item?.name}</td>
									<td>{item?.year}</td>
									<td>{item?.countBoys}</td>
									<td>{item?.countGirls}</td>
									<td>{item?.totalStudents}</td>
								</tr>
							)
					)}
				</tbody>
			</table>
		</div>
	)
}

export default RecentClassTable
