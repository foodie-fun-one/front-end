import React from "react";

const SignUpForm = () => {

    //TODO: Add Links and routing to "Login"
    return (
        <div className="sign-up-form">
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
            <p>Already have an account?</p>
            <p>Login</p>
        </div>
    )
}

export default SignUpForm;