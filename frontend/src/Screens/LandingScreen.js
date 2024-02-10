import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import Swal from "sweetalert2";
import {
  sendCreateAccountRequest,
  sendLoginRequest,
} from "../Services/UserService";
import { useNavigate } from "react-router-dom";

function LandingScreen({ onLogin }) {
  const navigate = useNavigate();
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleCloseSignUpModal = () => {
    setShowSignupModal(false);
  };

  const [formSignUpValues, setFormSignUpValues] = useState({
    email: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [formLoginValues, setFormLoginValues] = useState({
    email: "",
    password: "",
  });

  const handleSignUpInputChange = (event) => {
    const { name, value } = event.target;
    setFormSignUpValues({ ...formSignUpValues, [name]: value });
  };

  const handleSignupRequest = () => {
    const { email, password, firstName, middleName, lastName } =
      formSignUpValues;

    sendCreateAccountRequest(email, password, firstName, middleName, lastName)
      .then(
        Swal.fire({
          icon: "success",
          title: "Account Created",
          text: "Your account has been created successfully",
          timer: 5000,
          showConfirmButton: false,
        })
      )
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Account Creation Failed",
          text: "Failed To Create Account",
          timer: 5000,
          showConfirmButton: false,
        });
      });
  };

  const handleLoginRequest = () => {
    const { email, password } = formLoginValues;
    setFormLoginValues({
      email: "",
      password: "",
    });

    sendLoginRequest(email, password)
      .then((data) => {
        if (data.message) {
          if (data.message === "Wrong Username or Password") {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: "Wrong Username or Password",
              showConfirmButton: false,
              timer: 800,
            });
          } else {
            // Simulating a successful login
            sessionStorage.setItem("isLoggedIn", "true");

            Swal.fire({
              icon: "success",
              title: "Login Successful",
              showConfirmButton: false,
              timer: 1500,
            });

            onLogin();
            navigate("/dashboard");
          }
        } else {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          onLogin();
          sessionStorage.setItem("isLoggedIn", "true");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Wrong Username or Password",
          showConfirmButton: false,
          timer: 800,
        });
      });
  };

  const handleLoginInput = (event) => {
    const { name, value } = event.target;
    setFormLoginValues({ ...formLoginValues, [name]: value });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6} style={{ marginBottom: "10px" }}>
                  <img src="/pet.jpg" alt="Logo" className="img-fluid" />
                </Col>
                <Col md={6}>
                  <Form>
                    <Form.Group className="mb-3">
                      <h2>Welcome To PetManage</h2>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ float: "left" }}>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        required
                        name="email"
                        value={formLoginValues.email}
                        onChange={handleLoginInput}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ float: "left" }}>
                        Password:
                      </Form.Label>
                      <Form.Control
                        value={formLoginValues.password}
                        name="password"
                        type="password"
                        onChange={handleLoginInput}
                        required
                      />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="text-white"
                        onClick={handleLoginRequest}
                      >
                        Login
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="mt-2 text-white"
                        onClick={() => {
                          setShowSignupModal(true);
                        }}
                      >
                        Create Account
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showSignupModal} onHide={handleCloseSignUpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="signup-email">
              <Form.Label for="email" style={{ color: "black !important" }}>
                Email:
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                value={formSignUpValues.email}
                onChange={handleSignUpInputChange}
              />
            </Form.Group>
            <Form.Group
              controlId="signup-password"
              style={{ marginTop: "15px" }}
            >
              <Form.Label for="password">Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                value={formSignUpValues.password}
                onChange={handleSignUpInputChange}
              />
            </Form.Group>
            <Form.Group
              controlId="signup-firstName"
              style={{ marginTop: "15px" }}
            >
              <Form.Label for="firstName">First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                required
                value={formSignUpValues.firstName}
                onChange={handleSignUpInputChange}
              />
            </Form.Group>
            <Form.Group
              controlId="signup-middleName"
              style={{ marginTop: "15px" }}
            >
              <Form.Label for="middleName">Middle Name:</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formSignUpValues.middleName}
                onChange={handleSignUpInputChange}
              />
            </Form.Group>
            <Form.Group
              controlId="signup-lastName"
              style={{ marginTop: "15px" }}
            >
              <Form.Label for="lastName">Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                required
                value={formSignUpValues.lastName}
                onChange={handleSignUpInputChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={handleSignupRequest}
            >
              Sign Up
            </Button>
            <Button
              className="text-white"
              variant="secondary"
              onClick={handleCloseSignUpModal}
            >
              Close
            </Button>
            {/* Additional buttons or actions */}
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default LandingScreen;
