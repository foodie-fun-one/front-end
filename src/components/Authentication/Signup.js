import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
        console.log("SignUp data", data)
    };

    return (
        <div className="signup-form-container">
            <h2>Create an Account</h2>
            <form className="signup-form" onSubmit={event => event.preventDefault()}>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        ref={register({
                            required: "Email is required",
                            pattern: /^\S+@\S+$/i
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="username"
                        ref={register({
                            required: "Name is required",
                            maxLength: {
                                value: 50,
                                message: "Character limit exceeded"
                            }
                        })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}

                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        ref={register({
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input
                        type="password"
                        name="password_confirm"
                        ref={register({
                            validate: value =>
                                value === password.current || "Passwords must be the same"
                        })}
                    />
                    {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
                </label>
                <label>
                    <p>Location</p>
                    <input
                        type="text"
                        name="location"
                        ref={register({
                            required: "Location is required"
                        })}
                    />
                    {errors.location && <p>{errors.location.message}</p>}
                </label>
                <button type="submit" onClick={handleSubmit(onSubmit)}>
                    Submit
                </button>
            </form>
            <div className="redirect-form">
                <p>Already have an account?</p>
                <p>Login</p>
            </div>
        </div>
    )
}

export default SignUpForm;