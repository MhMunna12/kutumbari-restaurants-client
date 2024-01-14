/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../../assets/others/authentication.gif'
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // form.reset()
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User LoggedIn Successful.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });

            })
            .catch(err => console.log(err))

    }
    const validCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            alert('invalid captcha')
            setDisabled(true)
        }
    }
    return (
        <div>
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:mr-14">

                        <img src={image} alt="" />
                    </div>
                    <div className="card shrink-0 w-full shadow-lg max-w-sm  bg-base-50">
                        <div className="card-body">
                            <h3 className="text-3xl text-center font-bold">Login</h3>

                            <form action="" onSubmit={handleSubmit}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={validCaptcha} ref={captchaRef} type="text" name="captcha" placeholder="Re-captcha" className="input input-bordered" required />
                                    {/*<button onClick={validCaptcha} className="btn btn-outline btn-xs mt-2">validate</button>*/}
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={false} className="btn btn-primary" type='submit' value="Login" />
                                </div>
                            </form>
                            <p className="my-4 text-center ">New Come! Create Account <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;