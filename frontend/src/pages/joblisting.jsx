import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/tableicon.css';
function Joblisting() {
    const [country, setCountryList] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getCountryList = async () => {

        axios({
            url: 'https://restcountries.com/v3.1/all',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(res => setCountryList(res.data))
            .catch((err => console.log(err)))

    }

    useEffect(() => {
        getCountryList();
    }, [])

    return (
        <div>


            <div className="body-wrapper">

                
            <div className="container-fluid">
                    <div className="row">
                        <div className="card">
                            <div className="card-body p-4">
                                <Button variant="primary" onClick={handleShow}>
                                    Upload Job
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <hr />
                    <h2>Posted Job</h2>
                    <hr />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card overflow-hidden hover-img">
                                <div className="position-relative">
                                    <a href="javascript:void(0)">
                                        <img src="images/blog/blog-img1.jpg" className="card-img-top" alt="matdash-img" />
                                    </a>
                                    <img src="images/profile/user-3.jpg" alt="matdash-img" className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
                                </div>
                                <div className="card-body p-4">
                                    <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">React</span>
                                    <a className="d-block my-4 fs-5 text-dark fw-semibold link-primary" href=""> Senior FullStack Developer </a>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-eye text-dark fs-5"></i>9,125
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-message-2 text-dark fs-5"></i>3
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-point text-dark"></i>Mon, Dec 19
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="card overflow-hidden hover-img">
                                <div className="position-relative">
                                    <a href="javascript:void(0)">
                                        <img src="images/blog/blog-img2.jpg" className="card-img-top" alt="matdash-img" />
                                    </a>
                                    <img src="images/profile/user-2.jpg" alt="matdash-img" className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
                                </div>
                                <div className="card-body p-4">
                                    <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">FlutterWave</span>
                                    <a className="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="">Junior Developer</a>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-eye text-dark fs-5"></i>4,150
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-message-2 text-dark fs-5"></i>38
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-point text-dark"></i>Sun, Dec 18
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="card overflow-hidden hover-img">
                                <div className="position-relative">
                                    <a href="javascript:void(0)">
                                        <img src="images/blog/blog-img2.jpg" className="card-img-top" alt="matdash-img" />
                                    </a>
                                    <img src="images/profile/user-2.jpg" alt="matdash-img" className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
                                </div>
                                <div className="card-body p-4">
                                    <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">Angular</span>
                                    <a className="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="">Senior Developer</a>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-eye text-dark fs-5"></i>4,150
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-message-2 text-dark fs-5"></i>38
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-point text-dark"></i>Sun, Dec 18
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card overflow-hidden hover-img">
                                    <div className="position-relative">
                                        <a href="javascript:void(0)">
                                            <img src="images/blog/blog-img3.jpg" className="card-img-top" alt="matdash-img" />
                                        </a>
                                        <img src="images/profile/user-3.jpg" alt="matdash-img" className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Georgeanna Ramero" />
                                    </div>
                                    <div className="card-body p-4">
                                        <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">JAVA</span>
                                        <a className="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="">Andriod Developer</a>
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="ti ti-eye text-dark fs-5"></i>9,480
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="ti ti-message-2 text-dark fs-5"></i>12
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="ti ti-point text-dark"></i>Sat, Dec 17
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="flex flex-col gap-2">
                            <label>Job Description</label>
                            <input type="text" className="py-3 px-4 rounded-md border text-secondary" />
                        </div>
                        <br />
                        <div className="flex flex-col gap-2">
                            <label>Years of Experience:</label>
                            <input type="text" className="py-3 px-4 rounded-md border text-secondary" />
                        </div>
                        <br />
                        <div className="flex flex-col gap-2">
                            <label>Qualification:</label>
                            <input type="text" className="py-3 px-4 rounded-md border text-secondary" />
                        </div>
                        <br />
                        <div className="flex flex-col gap-2">
                            <label>Salary $:</label>
                            <input type="number" className="py-3 px-4 rounded-md border text-secondary" />
                        </div>
                        <br />
                        <div className="flex flex-col gap-2 my-2">
                            <label>Location:</label>
                            <select class="form-control">

                                <option value="0" disabled selected>Select Location</option>
                                {
                                    country.map((item) => {
                                        return (
                                            <option value={item.name.common}>{item.name.common}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                <br />
                        <div className="flex flex-col gap-2">
                            <label>Additional Information:</label>
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
    )
}

export default Joblisting
