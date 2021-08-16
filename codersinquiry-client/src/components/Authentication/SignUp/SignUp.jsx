import React from 'react';
import './SignUp.css';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='signUp'>
            <h3 className='fw-bold'>Create an Account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col'>
                        <div className='form-floating mb-2'>
                            <input type='text' className='form-control shadow-none border-0 border-bottom rounded-0' id='firstName' placeholder='First Name' {...register('firstName', { required: true })} />
                            {errors.firstName && <span className="text-danger">This field is required</span>}
                            <label for='firstName'>First Name</label>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-floating mb-2'>
                            <input type='text' className='form-control shadow-none border-0 border-bottom rounded-0' id='lastName' placeholder='Last Name' {...register('lastName', { required: true })} />
                            {errors.lastName && <span className="text-danger">This field is required</span>}
                            <label for='lastName'>Last Name</label>
                        </div>
                    </div>
                </div>
                <div className='form-floating mb-2'>
                    <input type='text' className='form-control shadow-none border-0 border-bottom rounded-0' id='username' placeholder='User Name' {...register('username', { required: true })} />
                    {errors.username && <span className="text-danger">This field is required</span>}
                    <label for='username'>Username</label>
                </div>
                <div className='form-floating mb-2'>
                    <input type='email' className='form-control shadow-none border-0 border-bottom rounded-0' id='email' placeholder='Email' {...register('email', { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    <label for='email'>Email</label>
                </div>
                <div className='form-floating mb-2'>
                    <input type='password' className='form-control shadow-none border-0 border-bottom rounded-0' id='password' placeholder='Password' {...register('password', { required: true })} />
                    {errors.password && <span className="text-danger">This field is required</span>}
                    <label for='password'>Password</label>
                </div>
                <div className='form-floating mb-2'>
                    <input type='password' className='form-control shadow-none border-0 border-bottom rounded-0' id='floatingPassword' placeholder='Confirm Password' {...register('confirmPassword', { required: true })} />
                    {errors.confirmPassword && <span className="text-danger">This field is required</span>}
                    <label for='confirmPassword'>Confirm Password</label>
                </div>
                <div className='text-center'>
                    <button type='submit' class='btn btn-primary rounded-pill w-50 text-center'>
                        Sign Up
                    </button>
                </div>
            </form>
            <p className='text-center my-3'>or</p>
            <div className='signUp__socialPlatform px-5'>
                <button className='btn border rounded-pill mb-2'>Sign Up with Google</button>
                <button className='btn border rounded-pill mb-2'>Sign Up with Facebook</button>
                <button className='btn border rounded-pill mb-2'>Sign Up with Github</button>
            </div>
        </div>
    );
};

export default SignUp;
