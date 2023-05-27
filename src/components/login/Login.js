import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import authneticateUserApi from '../../api/authneticateUser';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors,  isDirty, isValid },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const { token } = await authneticateUserApi(data);
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    }
     
  }
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4 text-black">
                <h1 className="fw-bold mb-2 text-uppercase text-gradient" data-testid='login-header'>
                  Login
                </h1>
                <p className="mb-3 text-gradient">
                  Please enter your login and password!
                </p>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center text-black">
                        Email address
                      </Form.Label>
                      <Form.Control
                      data-testid='input-email'
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
                      <Button 
disabled={!isDirty || !isValid} 
variant="warning"
                       type="submit"
                        data-testid='login-button'>
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3 text-black">
                    <p className="mb-0  text-center">
                      Don't have an account?{' '}
                      <Link to="/register" className="text-gradient fw-bold">
                        Sign Up
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

export default Login;
