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
    Input
} from "reactstrap";

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
        <Container className="signup-form-container">
            <h2>Create an Account</h2>
            <Form className="signup-form" onSubmit={event => event.preventDefault()}>
                <FormGroup>
                    <Label>
                        <p>Email</p>
                        <Input
                            type="email"
                            name="email"
                            placeholder="I<3food@email.com"
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
                        <p>Name</p>
                        <Input
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
                <FormGroup>
                    <Label>
                        <p>Confirm Password</p>
                        <Input
                            type="password"
                            name="password_confirm"
                            placeholder="********"
                            ref={register({
                                validate: value =>
                                    value === password.current || "Passwords must be the same"
                            })}
                        />
                        {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <p>Location</p>
                        <Input
                            type="text"
                            name="location"
                            placeholder="Boston"
                            ref={register({
                                required: "Location is required"
                            })}
                        />
                        {errors.location && <p>{errors.location.message}</p>}
                    </Label>
                </FormGroup>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                    Submit
                </Button>
            </Form>
            <Container className="redirect-form">
                <p>Already have an account?</p>
                <Link className="redirect-login" to="/login">Login</Link>
            </Container>
        </Container>
    )
}

export default SignUpForm;