import React from "react";

//* Login will be the user's landing page
const LoginForm = () => {
    //* First thing the user will see
    //TODO: Add Links and routing to "Sign Up"
    return (
        <div className="login-form">
            <h2>Create an Account</h2>
            <form>
                <label>
                    <p>Email</p>
                    <input type="email" name="email" autofocus />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" name="username" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" />
                </label>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" />
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
            <p>Sign Up</p>
        </div>
    )
}

export default LoginForm;