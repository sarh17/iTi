import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import MenuItem from "react-bootstrap/DropdownMenu";
import styles from "./Nav.module.css";
import book from "../../images/book.jpg";

function Navegation() {
  return (
    <Navbar className={`${styles["nav-bg"]} `} expand="lg">
      <Container fluid>
        <Navbar.Brand className=" img-logo col-3 d-flex gap-3 align-items-center" href="#">
          <svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.2311 13.7187C31.4425 14.6991 29.961 16.0836 28.8717 17.7426H28.8625C27.7984 19.363 27.1066 21.2528 26.8665 23.2932V44.3213L24.535 45.5L3.99797 35.1182C2.87362 34.5493 1.6288 33.1112 1.02396 32.0003C0.382313 30.824 0.0209143 29.483 0.00836571 28.0792L0 0.5L18.0064 9.60357C19.9639 10.5874 21.9742 12.381 23.2868 14.0642L22.1666 15.7691L22.2628 15.8327C21.7308 16.8658 21.2949 17.9433 20.9569 19.0518C20.7327 18.5984 20.4826 18.1617 20.2074 17.7426H20.1982C19.109 16.0836 17.6274 14.6991 15.8388 13.7187L4.66305 8.06846L4.65385 28.0608C4.6689 29.1835 5.30888 30.4802 6.2015 31.0198L22.2043 39.1103V23.2188L22.2227 22.982C22.5238 20.1368 23.4826 17.4816 24.9817 15.1969L24.975 15.1927C26.3997 13.0226 28.6852 10.799 31.0644 9.60357L49.0708 0.5L49.0607 28.0792C49.0498 29.4822 48.6884 30.8232 48.046 32.0003C47.4411 33.1104 46.1963 34.5493 45.0719 35.1182L29.1972 43.1425V37.9315L42.8693 31.0198C43.761 30.4802 44.401 29.1835 44.4169 28.0608H44.4077V8.06846L33.2311 13.7187Z"
              fill="#EAEAEA"
            />
          </svg>
          <div>
            <h1 className={`${styles["nav-title"]}`}>BOOKOVA</h1>

            <p className={`${styles["nav-smallest"]}`}>EDUCATION</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className="text-light justify-content-around" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav className="col-6 col-sm-12 link-sec me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className={`${styles["link-active"]}`} href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className={`${styles["link-active"]}`} href="#action2">
                About
              </Nav.Link>
              <NavDropdown
                className={`${styles["link-active"]}  nav-dropdown-light-example`}
                title="Shop"
                menuVariant="light"
                to="/"
              >
                <div className={`${styles["shop-list"]} row`}>
                  <div className="col-sm-4 p-4">
                    <h3>General</h3>
                    <NavDropdown.Item href="#">Short stories</NavDropdown.Item>
                    <NavDropdown.Item href="#">Adventure stories</NavDropdown.Item>
                    <NavDropdown.Item href="#">Novel</NavDropdown.Item>
                    <NavDropdown.Item href="#">Horror</NavDropdown.Item>
                    <NavDropdown.Item href="#">comics</NavDropdown.Item>
                  </div>
                  <div className="col-sm-4 pt-5">
                    <NavDropdown.Item href="#">Clasic</NavDropdown.Item>
                    <NavDropdown.Item href="#">Literary fiction</NavDropdown.Item>
                    <NavDropdown.Item href="#">Poetry</NavDropdown.Item>
                    <NavDropdown.Item href="#">Plays</NavDropdown.Item>
                    <NavDropdown.Item href="#">Thrillers</NavDropdown.Item>
                  </div>
                  <div className="col-sm-4 p-4">
                    <h3>Educational</h3>
                    <NavDropdown.Item href="#">Prep 3</NavDropdown.Item>
                    <NavDropdown.Item href="#">High school Junior</NavDropdown.Item>
                    <NavDropdown.Item href="#">High school sophomore</NavDropdown.Item>
                    <NavDropdown.Item href="#">High school senior</NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link className={`${styles["link-active"]}`} href="#">
                Contact us
              </Nav.Link>
            </Nav>
            <div
              className={`${styles["register-btns"]} d-none col-sm-5 col-lg-6 d-flex flex-row justify-content-between`}
            >
              <Button className={`${styles["login-btn"]} ${styles["nav-btn"]} gap-2 `}>Login</Button>
              <Button className={`${styles["sign-btn"]} ${styles["nav-btn"]} `}>Sign Up</Button>
            </div>
            <div className="user-pages col-sm-5 col-lg-6 d-flex flex-row justify-content-between ">
              <Nav.Link className="col">
                <i className="bi bi-cart" />
              </Nav.Link>
              <Nav.Link className="col">
                <i className="bi bi-box2-heart" />
              </Nav.Link>
              <NavDropdown
                eventKey={1}
                className="col"
                title={
                  <div className="pull-left">
                    <img className={`thumbnail-image w-25 ${"profile-img"}`} src={book} alt="user pic" />
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={1.1} href="/profile">
                  Profile
                </MenuItem>
                <MenuItem eventKey={1.3}>
                  <i className="fa fa-sign-out" /> Logout
                </MenuItem>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegation;
