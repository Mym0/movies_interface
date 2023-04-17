import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import registerUserApi from "../../api/registerUser";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    console.log(data);
    localStorage.removeItem('token');
    const { token } = await registerUserApi(data);
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    }
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4 text-black">
                <h1 className="fw-bold mb-2 text-uppercase text-gradient">
                  Register
                </h1>
                <p className="mb-3 text-gradient">
                  Please choose your email and password!
                </p>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center text-black">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        {...register('firstname', { required: true })}
                      />
                      {errors.firstName && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center text-black">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        {...register('lastname', { required: true })}
                      />
                      {errors.lastName && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center text-black">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register('email', { required: true })}
                      />
                      {errors.email && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="text-black">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: true })}
                      />
                      {errors.password && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="warning" type="submit">
                        Register
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3 text-black">
                    <p className="mb-0  text-center">
                      Already have an account?
                      <Link to="/login" className="text-gradient fw-bold">
                        login in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
