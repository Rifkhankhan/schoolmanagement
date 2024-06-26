import React from 'react'
import { Button, Image, Modal, Spinner } from 'react-bootstrap'
import image from './../../Images/kholi 48th century.PNG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
const ShowTaskModal = ({ showModal, closeHandler, data }) => {
	return (
		<>
			<Modal show={showModal} onHide={closeHandler} centered size="lg">
				<Modal.Header
					style={{
						backgroundColor: '#7993d2'
					}}>
					<Modal.Title className="w-100">
						<FontAwesomeIcon
							style={{ cursor: 'pointer' }}
							icon={faClose}
							onClick={closeHandler}
							className="float-end my-auto text-danger"
						/>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image
						src={image}
						fluid
						className="w-100"
						style={{ maxHeight: '50vh' }}
					/>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ShowTaskModal
