// table with date filter
import styles from './SummaryTable.module.css'
import React, { useLayoutEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import image from './../../Images/kholi 48th century.PNG'

import 'jspdf-autotable'
import { converTime, exportPdf, handlePrint } from '../../Utils/Functions'

function SummaryTable({
	list,
	handleModel,
	currentUser,
	companies,
	userCompanies,
	selectedCompany
}) {
	// useLayoutEffect(() => {
	// 	setInitialData([...calculateBalance()])
	// 	setData([...calculateBalance()])
	// }, [list])

	// console.log(list)
	// console.log(companies)
	// console.log(userCompanies)

	// Function to calculate balance
	const calculateBalance = () => {
		let balance = 0
		return list?.map(transaction => {
			// Update balance based on transaction type

			if (
				transaction.requestType === 'receipt' ||
				transaction.requestForm === 'got'
			) {
				balance += +transaction.amount
			} else {
				balance -= +transaction.amount
			}
			// Add balance property to transaction object
			return { ...transaction, balance }
		})
	}

	// State variables
	const [initialData, setInitialData] = useState()
	const [data, setData] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(5)
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)

	// Calculate current items
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem)
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber)

	// Change items per page
	const handleItemsPerPageChange = e => {
		setItemsPerPage(parseInt(e.target.value))
		setCurrentPage(1) // Reset to first page when changing items per page
	}

	// Filter data by date range
	const handleDateFilter = () => {
		const filteredData = data?.filter(item => {
			const itemDate = new Date(item.date)
			return (
				(!startDate || itemDate >= startDate) &&
				(!endDate || itemDate <= endDate)
			)
		})
		setData(filteredData)
		setCurrentPage(1)
	}

	// Reset date filter
	const resetDateFilter = () => {
		setData(initialData)
		setStartDate(null)
		setEndDate(null)
		setCurrentPage(1)
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
		<div className={`container-fluid my-3 ${styles.tableContainer}`}>
			<div className="row">
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
					<DatePicker
						dateFormat="dd/MM/yyyy"
						placeholderText="Start Date"
						selected={startDate}
						onChange={date => setStartDate(date)}
						className="form-control form-control-sm m-1"
					/>
				</div>

				<div className="col-auto">
					<DatePicker
						dateFormat="dd/MM/yyyy"
						placeholderText="End Date"
						selected={endDate}
						onChange={date => setEndDate(date)}
						className="form-control form-control-sm m-1"
					/>
				</div>

				<div className="col-auto">
					<button
						onClick={handleDateFilter}
						className="btn btn-primary btn-sm m-1">
						Apply Filter
					</button>
					<button
						onClick={resetDateFilter}
						className="btn btn-secondary btn-sm m-1">
						Reset Filter
					</button>
				</div>
				<div className="col-auto">
					<button
						onClick={() =>
							exportPdf(
								'Summary Report',
								companies,
								selectedCompany,
								converTime
							)
						}
						className="btn btn-secondary btn-sm m-1">
						Download
					</button>

					<button
						onClick={() =>
							handlePrint('Summary Report', companies, selectedCompany)
						}
						className="btn btn-primary btn-sm m-1">
						Print
					</button>
				</div>
			</div>
			<table className={`table table-bordered table-hover `} id="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Date</th>
						<th>Company</th>

						<th>Amount</th>
						<th>Category</th>
						<th>Sub Category</th>
						<th>Payment Type</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{currentItems?.map((item, index) => (
						<tr
							key={item}
							onClick={() => {
								handleModel(item)
							}}>
							<td>{index + 1}</td>
							<td>{new Date(item.date).toISOString().split('T')[0]}</td>
							<td>
								{companies.find(comp => comp.cid === item?.cid)?.name
									? companies.find(comp => comp.cid === item?.cid)?.name
									: 'None'}
							</td>
							<td style={{ textTransform: 'capitalize' }}>{item.amount}</td>
							<td style={{ textTransform: 'capitalize' }}>
								{item.requestType}
							</td>
							<td style={{ textTransform: 'capitalize' }}>
								{item.requestForm === 'got'
									? 'Received'
									: item.requestForm === 'cash'
									? 'Income'
									: item.requestForm}
							</td>
							<td style={{ textTransform: 'capitalize' }}>
								{item.methode === 'transfer'
									? 'Bank Transfer'
									: item.methode === 'deposite'
									? 'Bank Deposite'
									: item.methode}
							</td>
							<td style={{ textTransform: 'capitalize' }}>{item.balance}</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="8" className="text-right">
							{renderPaginationButtons()}
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default SummaryTable
