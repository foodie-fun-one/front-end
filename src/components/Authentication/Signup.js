import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row
} from "reactstrap";
import "./Signup.css";

const SignUpForm = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
        axios
            .post("https://reqres.in/api/users", data)
            .then(res => {
                console.log("SignUp submitted successfully", res)
            })
            .catch(err => {
                console.log("SignUp error occured", err)
            })
    };
    return (
        <Container className="signup-form-container" fluid="">
            <h2>Create an Account</h2>
            <Form className="signup-form" onSubmit={event => event.preventDefault()}>
                <FormGroup>
                    <Label for="signupEmail">Email</Label>
                    <Input
                        id="signupEmail"
                        type="email"
                        name="email"
                        placeholder="i<3food@email.com"
                        ref={register({
                            required: "Email is required",
                            pattern: /^\S+@\S+$/i
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </FormGroup>
                <FormGroup>
                    <Label for="signupName">Name</Label>
                    <Input
                        id="signupName"
                        type="text"
                        name="username"
                        placeholder="FoodChampion2"
                        ref={register({
                            required: "Name is required",
                            maxLength: {
                                value: 50,
                                message: "Character limit exceeded"
                            }
                        })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </FormGroup>
                <FormGroup>
                    <Label for="signupPassword">Password</Label>
                    <Input
                        id="signupPassword"
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
                </FormGroup>
                <FormGroup>
                    <Label for="signupConfirmPassword">Confirm Password</Label>
                    <Input
                        id="signupConfirmPassword"
                        type="password"
                        name="password_confirm"
                        placeholder="********"
                        ref={register({
                            validate: value =>
                                value === password.current || "Passwords must be the same"
                        })}
                    />
                    {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
                </FormGroup>
                <FormGroup>
                    <Label for="signupLocation">Location</Label>
                    <Input
                        id="signupLocation"
                        type="text"
                        name="location"
                        placeholder="Boston"
                        ref={register({
                            required: "Location is required"
                        })}
                    />
                    {errors.location && <p>{errors.location.message}</p>}
                </FormGroup>
                <FormGroup>
                    <Button type="submit" onClick={handleSubmit(onSubmit)}>
                        Create
                        </Button>
                </FormGroup>
                <p>Already have an account?<Link className="redirect-login" to="/login"> Login Here</Link></p>
            </Form>
        </Container>
    )
}

export default SignUpForm;