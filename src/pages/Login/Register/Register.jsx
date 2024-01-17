/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/others/authentication2.png'
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const navigate = useNavigate();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUsers = { name: data.name, email: data.email, }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(saveUsers)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Create Successful!",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset()
                                }
                            })

                    })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/login')
                console.log(user);
            })
            .catch(err => {
                console.log(err.message);
            })
        console.log(data)
    }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.confirm.value;
    //     form.reset()
    //     console.log(name, email, password);
    //     createUser(name, email, password)
    //         .then(result => {
    //             const user = result.user
    //             console.log(user);
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //         })
    // }
    return (
        <div>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col   lg:flex-row">
                    <div className="text-center lg:mr-14">

                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full shadow-lg max-w-sm  bg-base-50">
                        <div className="card-body">
                            <h3 className="text-3xl text-center font-bold">Sign Up    </h3>

                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("photoUrl", { required: true })} placeholder="PhotoUrl" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500">PhotoUrl is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' {...register("password", {
                                        required: true, minLength: 6, maxLength: 20
                                        , pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="Confirm Password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have 1 uppercase 1 lowercase 1 number 1 special characters</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#FF3811] hover:bg-[#fa6b4e] text-white" type='submit' value="Register" />
                                </div>
                            </form>
                            <p className="my-4 text-center ">Already Have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;