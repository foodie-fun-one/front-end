import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    //TODO: Send this data (object) somewhere
    const onSubmit = data => {
        console.log("Login data", data)
    }
    //TODO: Add Links and routing to "Sign Up"
    return (
        <div className="login-form-container">
            <h2>Login to your Account</h2>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="i<3food@gmail.com"
                        ref={register} />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        ref={register} />
                </label>
                <button type="submit">
                    Login
                </button>
            </form>
            <p>Need an account?</p>
            <p>Sign Up</p>
        </div>
    )
}

export default LoginForm;