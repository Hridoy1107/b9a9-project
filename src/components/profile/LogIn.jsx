import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <>
            <div>
                <div className="mx-auto w-1/2">
                    <h2 className="text-3xl my-10 text-center font-semibold text-blue-600">Please Login</h2>
                    <form onSubmit={handleLogin}>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="Email" required />
                        <br />
                        <div className="mb-4 relative border-none">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                className="w-full py-2 px-4"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                id="Password" required />
                            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }

                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="btn btn-primary mb-4 w-full" type="submit" value="Login" />
                    </form>
                    <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                </div>
            </div>
        </>



    );
};

export default Login;