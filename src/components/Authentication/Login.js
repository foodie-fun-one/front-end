import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input
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
        <Container className="login-form-container">
            <h2>Login to your Account</h2>
            <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label htmlFor="loginEmail">Username</Label>
                    <Input
                        id="loginEmail"
                        type="input"
                        name="username"
                        placeholder="i<3food@gmail.com"
                        onChange={handleChange}
                        value={user.email}
                        ref={register({

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
                        placeholder="********"
                        ref={register({
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </FormGroup>
                <FormGroup>
                    <Button>
                        Login
                </Button>
                </FormGroup>
                <p>Need an account?<Link className="redirect-signup" to="/signup"> Sign Up Here</Link></p>
            </Form>
        </Container>
    )
}

export default LoginForm;