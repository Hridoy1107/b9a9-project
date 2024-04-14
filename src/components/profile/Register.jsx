import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log(name, email, password, photo);

        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => console.log('Profile updated'))
                    .catch()

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div>
            <div className="mx-auto w-1/2">
                <h2 className="text-3xl my-10 text-center font-semibold text-blue-600">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input className="mb-4 w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="Name" required />
                    <br />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="Email" required />
                    <br />
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input className="mb-4 w-full  py-2 px-4" type="text" required id="Photo" name="photo" placeholder="Photo URL" />
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
                    <input className="btn btn-primary mb-4 w-full" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;