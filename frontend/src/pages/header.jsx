import React, { useEffect, useState } from 'react'
import { MagicMotion } from "react-magic-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { faHistory } from '@fortawesome/pro-regular-svg-icons';
import '../styles/dashboard.css'
function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>

      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>

            <Navbar.Brand href="#">JOB LISTING</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">




              <div className="me-auto float-start mx-5 my-2 my-lg-0"
              >
                <Stack direction="horizontal" gap={5}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 form-search"
                      aria-label="Search"
                      style={{ marginLeft: '150px', width: '350px' }}

                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Stack>
              </div>




              <Nav
                className="me-auto my-2 my-lg-0 me-auto float-end "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <a href="#" target="_blank"
                  className="btn btn-primary me-2"><span className="d-none d-md-block">Sign Out</span></a>
                <img src="images/profile/user-1.jpg" alt="" width="35" height="35" className="rounded-circle" />
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Update resume
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Edit Profile
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>



      {/* Sidebar scroll--> */}

      <MagicMotion>
        <aside className="left-sidebar"
          style={{
            backgroundColor: "rgba(238, 238, 238)",
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "0.65rem",
            width: isCollapsed ? "1.3rem" : "20rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!isCollapsed && <h4 style={{ margin: 0 }}>MENU</h4>}

            <button
              style={{ cursor: "pointer", padding: 0, border: 0 }}
              onClick={() => setIsCollapsed(!isCollapsed)}
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.2877 6V18H22.2877V6H20.2877Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  style={{ minWidth: "24px", minHeight: "24px" }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
                    fill="currentColor"
                  />
                  <path d="M3 18V6H1V18H3Z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>

          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <FontAwesomeIcon icon="fa-home" />
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
                <FontAwesomeIcon icon="fa-Message" />
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
                <FontAwesomeIcon icon="fa-Gears" />
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
                    <iconify-icon icon="solar:planet-3-bold-duotone" style={{ color: 'black' }} className="fs-6"></iconify-icon>
                  </span>
                  <span className="hide-menu">Sample Page</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </MagicMotion>




    </div>
  )
}

export default Header
