import React, { useEffect, useState } from "react";
// import axios from "axios";
// import queryString from "query-string";
// import { useNavigate } from 'react-router-dom'
import '../styles/dashboard.css'
import '../styles/sidebar.css'
import '../styles/tableicon.css'

function Dashboard() {
  return (
    <div>
      <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div>
          <div className="nav-small-cap" style={{textAlign:"center"}}>
            <a href="./index.html">
              JOB LISTING
            </a>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">Home</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./index.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:home-smile-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">JOB Application</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:layers-minimalistic-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">VIEW JOB</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:danger-circle-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">VIEW APPLICATION</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./ui-card.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:bookmark-square-minimalistic-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">SAVED</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <iconify-icon icon="" className="nav-small-cap-icon fs-6 fs-6"></iconify-icon>
                <span className="hide-menu">SETTINGS</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./authentication-login.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:login-3-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">Change Password</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./authentication-register.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:user-plus-rounded-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">Update Profile</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <iconify-icon icon="" className="nav-small-cap-icon fs-4 fs-6"></iconify-icon>
                <span className="hide-menu">EXTRA</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./icon-tabler.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:sticker-smile-circle-2-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">Icons</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="./sample-page.html" aria-expanded="false">
                  <span>
                    <iconify-icon icon="solar:planet-3-bold-duotone" className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">Sample Page</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
      </aside>

      <div className="body-wrapper">


      <header className="app-header">
    <nav className="navbar navbar-expand-lg navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item d-block d-xl-none">
          <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
            <i className="ti ti-menu-2"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-icon-hover" href="javascript:void(0)">
            <i className="ti ti-bell-ringing"></i>
            <div className="notification bg-primary rounded-circle"></div>
          </a>
        </li>
      </ul>
      <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
        <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
          <a href="#" target="_blank"
            className="btn btn-primary me-2"><span className="d-none d-md-block">Sign Out</span></a>
          <li className="nav-item dropdown">
            <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src="images/profile/user-1.jpg" alt="" width="35" height="35" className="rounded-circle"/>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
              <div className="message-body">
                <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                  <i className="ti ti-user fs-6"></i>
                  <p className="mb-0 fs-3">My Profile</p>
                </a>
                <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                  <i className="ti ti-mail fs-6"></i>
                  <p className="mb-0 fs-3">My Account</p>
                </a>
                <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                  <i className="ti ti-list-check fs-6"></i>
                  <p className="mb-0 fs-3">My Task</p>
                </a>
                <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>

        <div className="container-fluid">
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
              <div className="py-6 px-6 text-center">
                <p className="mb-0 fs-4">Design and Developed by <a href="https://adminmart.com/" target="_blank"
                  className="pe-1 text-primary text-decoration-underline">Group 17</a>Distributed by <a href="https://themewagon.com/" target="_blank"
                    className="pe-1 text-primary text-decoration-underline">Group 17</a></p>
              </div>
            </div>



          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
