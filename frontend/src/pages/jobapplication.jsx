import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
function Jobapplication() {
   
    let appForm = {
        name: useRef(null),
        email: useRef(null),
        mobile: useRef(null),
        position: useRef(null),
        experience: useRef(null),
    };


    const saveUserData = async () => {
        let newForm = {
            name: appForm.name.current.value,
            email: appForm.email.current.value,
            mobile: appForm.mobile.current.value,
            position: appForm.position.current.value,
            experience: appForm.experience.current.value,
        };


        await axios({
            url: `http://localhost:8000/nolinkyet`,
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            data: newForm
        })


    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className='body-wrapper' >
                <div className='container-fluid'>
                    <div className='card'>
                       <div className='card-body'>
                       <h3 style={{textAlign:'center'}}>Job Application</h3>
                          <div className='row'>
                            <div className='offset-md-2 col-md-6 px-5' style={{background:'transparent'}}>
                                        
                                <form action="#">
                                    <div>
                                        <label htmlFor="">Name</label>
                                        <input
                                            ref={appForm.name}
                                            type="text"
                                            id="fullName"
                                            class="form-control"
                                            placeholder="Enter FullName"
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Email</label>
                                        <input
                                            ref={appForm.email}
                                            type="text"
                                            id="email"
                                            class="form-control"
                                            placeholder="Enter Email"
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Mobile</label>
                                        <input
                                            ref={appForm.mobile}
                                            type="text"
                                            id="mobile"
                                            class="form-control"
                                            placeholder="Enter Mobile"
                                        />
                                    </div>

                                    <br />
                                    <div>
                                        <label htmlFor="">Job Position</label>
                                        <input
                                            type="text"
                                            id="position"
                                            class="form-control"
                                            placeholder="Enter Job Position"
                                            ref={appForm.postion}
                                        />
                                    </div>

                                    <br />
                                    <div>
                                        <label htmlFor="">Year of Experience</label>
                                        <input
                                            ref={appForm.experience}
                                            type="text"
                                            id="experience"
                                            class="form-control"
                                            placeholder="Enter of year of experience"
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <button
                                            onClick={saveUserData}
                                            type="button"
                                            id="save"
                                            className="btn btn-success"
                                        >
                                            Save
                                        </button>
                                        <br />
                                    </div>
                                    <br />
                                </form>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobapplication
