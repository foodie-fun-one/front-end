import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    FormText
} from "reactstrap";
import styled from "styled-components";
import "./Login.css";

// Styled components
const SubmitButton = styled.button`
    display: inline-block;
    border-radius: 5px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 7rem;
    background: #EDE9D0;
    color: #e34129;
    border: 2px solid #EDE9D0;
    font-size: 1.1rem;
    font-weight:500;
    box-shadow: 3px 2px #56423E;
    &:hover{
        background: #56423E;
        box-shadow: 2px 1px #56423E;
        border: 2px solid #56423E;
        color: #EDE9D0;
`

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
                localStorage.setItem('token', res.data.token);
                localStorage.setItem("ID", res.data.userID);
                props.history.push(`/explore`)
                window.location.reload(false)
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
                            placeholder="Jane Smith"
                            onChange={handleChange}
                            value={user.username}
                            innerRef={register({
                                required: "please enter your account's username"
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
                            placeholder="p@ssWord3"
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
                        <SubmitButton className="signup-button">
                            Login
                        </SubmitButton>
                    </FormGroup>
                    <div className="redirect">
                        <p>Need an account? <Link className="redirect-signup" to="/signup"> Sign Up Here </Link></p>
                    </div>
                </Col>
            </Form>
        </div>
    )
}

export default LoginForm;