import React from 'react'
import { Button, Image, Modal, Spinner } from 'react-bootstrap'
import image from './../../Images/kholi 48th century.PNG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faClose,
	faDownload,
	faPager,
	faPen,
	faPrint
} from '@fortawesome/free-solid-svg-icons'
const UpdateModel = ({ showModal, closeHandler, data }) => {
	return (
		<>
			<Modal show={showModal} onHide={closeHandler} centered size="lg">
				<Modal.Header
					style={{
						backgroundColor: '#7993d2'
					}}>
					<Modal.Title className="w-100">
						<span className="fs-6 fst-italic me-auto">
							{data?.createdAt?.slice(0, 10)}
						</span>
						<span className="fs-3 mx-auto text-capitalize text-center">
							{' '}
							{data?.title}
						</span>
						<FontAwesomeIcon
							style={{ cursor: 'pointer' }}
							icon={faClose}
							onClick={closeHandler}
							className="float-end my-auto text-danger"
						/>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={image} fluid className="mx-auto" />

					<p>{data?.content}</p>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default UpdateModel
