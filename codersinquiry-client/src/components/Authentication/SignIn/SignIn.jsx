import React from 'react';
import './SignIn.css';
import { useForm } from 'react-hook-form';

const SignIn = () => {
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
        <div className='signIn'>
            <h3 className='fw-bold'>Sign In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-floating mb-2'>
                    <input type='email' className='form-control shadow-none border-0 border-bottom rounded-0' id='email' placeholder='Email' {...register('email', { required: true })} />
                    {errors.email && <span className='text-danger'>This field is required</span>}
                    <label for='email'>Email</label>
                </div>
                <div className='form-floating mb-2'>
                    <input type='password' className='form-control shadow-none border-0 border-bottom rounded-0' id='password' placeholder='Password' {...register('password', { required: true })} />
                    {errors.password && <span className='text-danger'>This field is required</span>}
                    <label for='password'>Password</label>
                </div>
                <div class='mb-2 form-check'>
                    <input type='checkbox' class='form-check-input' id='rememberMe' />
                    <label class='form-check-label' for='rememberMe'>
                        Remember Me
                    </label>
                </div>
                <div className='text-center'>
                    <button type='submit' class='btn btn-primary rounded-pill w-50 text-center'>
                        Sign In
                    </button>
                </div>
            </form>
            <p className='text-center my-3'>or</p>
            <div className='signUp__socialPlatform px-5'>
                <button className='btn border rounded-pill mb-2'>Sign In with Google</button>
                <button className='btn border rounded-pill mb-2'>Sign In with Facebook</button>
                <button className='btn border rounded-pill mb-2'>Sign In with Github</button>
            </div>
        </div>
    );
};

export default SignIn;
