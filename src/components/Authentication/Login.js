import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    //TODO: Send this data (object) somewhere
    const onSubmit = data => {
        console.log("Login data", data)
    }
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
            <div className="redirect-form">
                <p>Need an account?</p>
                <Link className="redirect-signup" to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginForm;