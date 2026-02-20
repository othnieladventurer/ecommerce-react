import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(`Submitted with email: ${data.email} and password: ${data.password}`);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 className="mb-4 text-center">Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="form-control"
                        {...register('email', { required: "Email is required" })}
                    />

                    {errors.email && <p className="text-danger fw-bold mt-1">⚠️{errors.email.message}</p>}

                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="form-control mt-3"
                        {...register('password', { required: "Password is required",
                            minLength: { 
                                value: 6,
                                message: "Password must be at least 6 characters" 
                            },

                            maxLength: { 
                                value: 12,
                                message: "Password must be at most 12 characters" 
                            }
                         })}
                    />

                    {errors.password && <p className="text-danger fw-bold mt-1">⚠️{errors.password.message}</p>}

                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
