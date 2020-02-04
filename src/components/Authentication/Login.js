import React from "react";
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

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios
            .post("https://reqres.in/api/users", data)
            .then(res => {
                console.log("Login submitted successfully", res)
            })
            .catch(err => {
                console.log("Login error occured", err)
            })
    };
    return (
        <Container className="login-form-container">
            <h2>Login to your Account</h2>
            <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label>
                        <p>Email</p>
                        <Input
                            type="email"
                            name="email"
                            placeholder="i<3food@gmail.com"
                            ref={register({
                                required: "Email is required",
                                pattern: /^\S+@\S+$/i
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <p>Password</p>
                        <Input
                            type="password"
                            name="password"
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
                    </Label>
                </FormGroup>
                <Button type="submit">
                    Login
                </Button>
            </Form>
            <Container className="redirect-form">
                <p>Need an account?</p>
                <Link className="redirect-signup" to="/signup">Sign Up</Link>
            </Container>
        </Container>
    )
}

export default LoginForm;