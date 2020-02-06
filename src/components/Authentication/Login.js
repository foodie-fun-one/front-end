import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    FormText
} from "reactstrap";
import "./Login.css";

const LoginForm = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = () => {
        axios
            .post("https://foodiefun-buildweek.herokuapp.com/api/login", user)
            .then(res => {
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token);
                props.history.push(`/explore`)
            })
            .catch(err => {
                console.log("Login error occured", err)
            })
    };

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="login-form-container">
            <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <h2>Login to your Account</h2>
                    <FormGroup>
                        <Label htmlFor="loginEmail">Username</Label>
                        <Input
                            id="loginEmail"
                            type="input"
                            name="username"
                            placeholder="janesmith@email.com"
                            onChange={handleChange}
                            value={user.username}
                            innerRef={register({
                                required: "please enter your account's email"
                            })}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="loginPassword">Password</Label>
                        <Input
                            id="loginPassword"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={user.password}
                            placeholder="P@ssWord3"
                            innerRef={register({
                                required: "please enter your password",
                                minLength: {
                                    value: 8,
                                    message: "sorry, that password is too short"
                                }
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <FormText>
                            <p>at least 8 characters</p>
                        </FormText>
                    </FormGroup>
                    <FormGroup className="button-container">
                        <Button className="signup-button">
                            Login
                        </Button>
                    </FormGroup>
                    <div>
                        <p>Need an account?<Link className="redirect-signup" to="/signup"> Sign Up Here</Link></p>
                    </div>
                </Col>
            </Form>
        </div>
    )
}

export default LoginForm;