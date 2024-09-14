import React, { Profiler, useEffect, useState } from "react";
// import axios from "axios";
// import queryString from "query-string";
// import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/dashboard.css'
import '../styles/sidebar.css'
import '../styles/tableicon.css'

function Profile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="body-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title fw-semibold mb-4">Personal Details</h1>
                            <div className="card">
                                <div className="card-body p-4">
                                    <h4>Firstname:</h4>
                                    <p>Your Firstname</p>
                                    <h4>Lastname:</h4>
                                    <p>Your Lastname</p>
                                    <h4>Email Address:</h4>
                                    <p>your email address </p>
                                    <h4>Job Seeker/Employer:</h4>
                                    <p>Job Employer </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body p-4">
                                    <Button variant="primary" onClick={handleShow}>
                                        Edit Profile
                                    </Button>

                                </div>
                            </div>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Personal Information</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="flex flex-col gap-2">
                                    <label>Firstname:</label>
                                    <input className="py-3 px-4 rounded-md border text-secondary" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Lastname:</label>
                                    <input className="py-3 px-4 rounded-md border text-secondary" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Email address:</label>
                                    <input type="text-area" className="py-3 px-4 rounded-md border text-secondary" />
                                </div>
                                <div className="flex flex-col gap-2 my-2">
                                    <label>Job Seeker/ Employer:</label>
                                    <select class="form-control" name="cars" id="cars">
                                    <option value="0" disabled selected>Select Job Seeker/ Employer</option>
                                        <option value="volvo">Job Seeker</option>
                                        <option value="saab">Employer</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Bio:</label>
                                    <textarea className="py-3 px-4 rounded-md border text-secondary" />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
