// table with date filter
import styles from './TaskTable.module.css'
import React, { useLayoutEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import image from './../../Images/kholi 48th century.PNG'

import 'jspdf-autotable'
import { converTime, exportPdf, handlePrint } from '../../Utils/Functions'
import { Container, Row, Table } from 'react-bootstrap'
import { tasks } from '../../DummyData'

function TaskTable({ handleModel }) {
	useLayoutEffect(() => {
		// setInitialData([...calculateBalance()])
		setData(tasks)
	}, [tasks])

	// console.log(list)
	// console.log(companies)
	// console.log(userCompanies)

	// State variables
	const [data, setData] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(5)

	// Calculate current items
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem)
	console.log(currentItems)
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber)

	// Change items per page
	const handleItemsPerPageChange = e => {
		setItemsPerPage(parseInt(e.target.value))
		setCurrentPage(1) // Reset to first page when changing items per page
	}

	// Render pagination buttons

	const renderPaginationButtons = () => {
		const totalPageCount = Math.ceil(data?.length / itemsPerPage)
		const pageNumbers = []
		for (let i = 1; i <= totalPageCount; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => paginate(i)}
					className={`btn ${currentPage === i ? 'btn-primary' : 'btn-light'}`}>
					{i}
				</button>
			)
		}
		return pageNumbers
	}

	return (
		<Container fluid className=" my-3 ">
			<Row>
				<div className="col-auto m-1">
					<select
						value={itemsPerPage}
						onChange={handleItemsPerPageChange}
						className="form-control form-control-sm">
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={15}>15</option>
						<option value={data?.length}>All</option>
						{/* Add more options as needed */}
					</select>
				</div>

				<div className="col-auto">
					<button
						onClick={() =>
							exportPdf(
								'Summary Report'
								// companies,
								// selectedCompany,
								// converTime
							)
						}
						className="btn btn-secondary btn-sm m-1">
						Download
					</button>

					<button
						// onClick={() =>
						// 	// handlePrint('Summary Report', companies, selectedCompany)
						// }
						className="btn btn-primary btn-sm m-1">
						Print
					</button>
				</div>
			</Row>
			<Row>
				<Table striped bordered hover variant="dark" responsive id="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Class</th>
							<th>Category</th>

							<th>Description</th>
							<th>Created Date</th>
							<th>Due Date</th>
						</tr>
					</thead>
					<tbody>
						{currentItems?.map((item, index) => (
							<tr key={item} onClick={() => handleModel(item)}>
								<td>{index + 1}</td>
								<td>{item.title}</td>
								<td>{item.classId}</td>
								<td>{item.category}</td>
								<td>{item.Description}</td>

								<td>{item.createdAt.slice(0, 10)}</td>
								<td>{item.dueDate}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr className="text-center">
							<td colSpan="8" className="text-right">
								{renderPaginationButtons()}
							</td>
						</tr>
					</tfoot>
				</Table>
			</Row>
		</Container>
	)
}

export default TaskTable
