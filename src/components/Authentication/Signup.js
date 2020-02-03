import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = ({ values }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("SignUp data", data)
    };
    //TODO: Add Links and routing to "Login"
    return (
        <div className="signup-form-container">
            <h2>Create an Account</h2>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Email</p>
                    <input type="email" name="email" ref={register} />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" name="username" ref={register} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" ref={register} />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" ref={register} />
                </label>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" ref={register} />
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
            <p>Already have an account?</p>
            <p>Login</p>
        </div>
    )
}

export default SignUpForm;