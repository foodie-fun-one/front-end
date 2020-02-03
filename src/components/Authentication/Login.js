import React from "react";

//* Login will be the user's landing page
const LoginForm = () => {
    //* First thing the user will see
    //TODO: Add Links and routing to "Sign Up"
    return (
        <div className="login-form">
            <h2>Login to your Account</h2>
            <form>
                <label>
                    <p>Email</p>
                    <input type="email" name="email" autofocus />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" />
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