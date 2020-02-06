import React, { useRef, useState } from "react";
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
import "./Signup.css";

const SignUpForm = (props) => {
    const { register, handleSubmit, errors, watch } = useForm();
    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: "",
        city: "",
    })
    // const password = useRef({});
    // password.current = watch("password", props);
    const onSubmit = () => {
        console.log(newUser)
        axios
            .post("https://foodiefun-buildweek.herokuapp.com/api/register", newUser)
            .then(res => {
                console.log("SignUp submitted successfully", res)
                props.history.push("/explore")
            })
            .catch(err => {
                console.log("SignUp error occured", err)
            })
    };

    const handleChanges = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    //! "Input" reactstrap component will not register 1st key press
    //! "Input" reactstrap password component will not register ANY key presses
    return (
        <div className="signup-form-container">
            <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <h2>Create an Account</h2>
                    <FormGroup>
                        <Label htmlFor="signupEmail">Email</Label>
                        <Input
                            id="signupEmail"
                            type="email"
                            name="email"
                            placeholder="janesmith@email.com"
                            onChange={handleChanges}
                            value={newUser.email}
                            innerRef={register({
                                required: "please enter your email",
                                pattern: /^\S+@\S+$/i
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="signupName">Name</Label>
                        <Input
                            id="signupName"
                            type="text"
                            name="username"
                            placeholder="Jane Smith"
                            onChange={handleChanges}
                            value={newUser.username}
                            innerRef={register({
                                required: "please enter your name",
                                maxLength: {
                                    value: 50,
                                    message: "sorry, that name is too long"
                                }
                            })}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="signupPassword">Password</Label>
                        <Input
                            id="signupPassword"
                            type="password"
                            name="password"
                            placeholder="p@ssWord3"
                            onChange={handleChanges}
                            value={newUser.password}
                            innerRef={register({
                                required: "please create a password",
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
                    <FormGroup>
                        <Label htmlFor="signupCity">City</Label>
                        <Input
                            id="signupCity"
                            type="text"
                            name="city"
                            placeholder="Anytown"
                            onChange={handleChanges}
                            value={newUser.city}
                            innerRef={register({
                                required: "please enter your city"
                            })}
                        />
                        {errors.city && <p>{errors.city.message}</p>}
                    </FormGroup>
                    <FormGroup className="button-container">
                        <Button className="signup-button" type="submit">
                            Create
                        </Button>
                    </FormGroup>
                    <div>
                        <p>Already have an account?<Link className="redirect-login" to="/login"> Login Here</Link></p>
                    </div>
                </Col>
            </Form>
        </div>
    )
}

export default SignUpForm;
