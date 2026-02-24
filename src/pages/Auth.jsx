
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const [mode, setMode] = useState("signup");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const {signup, user, logout, login } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        setError(null);

        let result;

        if (mode === "signup") {
            result = signup(data.email, data.password);
            } else {
                result = login(data.email, data.password);
        }

        if (result.success) {
           navigate("/")
        } else {
            setError(result.error);
        }

        console.log(result);
    }


   


    return (
        <div className="page">


           <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="col-md-5 col-lg-4">
                    <div className="card shadow border-0 rounded-0">
                   
                    <div className="card-body p-5">
                        
                        {/* Title */}
                        <div className="text-center mb-4">
                        { user && <p>User logged in: {user.email}</p>}
                        <button onClick={() => logout()} className="btn btn-outline-secondary">Logout</button>

                        <h2 className="fw-bold">{mode === 'signup' ? 'Sign Up' : 'Login'}</h2>
                        <p className="text-muted mb-0">Create your account to get started</p>
                        </div>

                        {/* Form */}
                        <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                        {error && <div className="text-danger">{error}</div>}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                            type="email"
                            className="form-control rounded-0"
                            id="email"
                            placeholder="you@example.com"
                            {...register("email", { required: "Email is required" })}
                            />
                            {
                             errors.email && <span className="text-danger">{errors.email.message}</span>
                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                            type="password"
                            className="form-control rounded-0"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required", 
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                            maxLength: { value: 22, message: "Password must be less than 22 characters" },
                            
                             })}
                            />
                            {
                              errors.password && <span className="text-danger">{errors.password.message}</span>  
                            }
                            
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 rounded-0 py-2"
                        >
                            {mode === 'signup' ? 'Sign Up' : 'Login'}
                        </button>

                        <div className="text-center mt-3">
                            {mode === 'signup' ? (
                                <small className="text-muted">
                                Already have an account?{" "}
                                <Link onClick={() => setMode("login")} className="text-primary cursor-pointer">Login</Link>
                                </small>
                            ) : (
                                <small className="text-muted">
                                Don't have an account?{" "}
                                <Link onClick={() => setMode("signup")} className="text-primary cursor-pointer">Sign Up</Link>
                                </small>
                            )}
                        </div>

                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}   