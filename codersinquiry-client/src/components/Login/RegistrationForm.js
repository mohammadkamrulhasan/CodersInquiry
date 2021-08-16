import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MainContainer from './formComponents/MainContainer';
import Form from './formComponents/Form';
import Input from './formComponents/Input';
import PrimaryButton from './formComponents/PrimaryButton';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// form validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
// import axios from 'axios';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
        .required('First name is a required field'),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
        .required('Last name is a required field'),
    email: yup.string().email('Email should have correct format').required('Email is a require field'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
});
const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
        return value;
    }
    return phoneNumber.formatInternational();
};
const RegistrationForm = () => {
    const [data, setValues] = useState({});
    const [error, setError] = useState(false);
    const history = useHistory();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            hasPhone: data.hasPhone,
            phoneNumber: data.phoneNumber,
            password: data.password,
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const hasPhone = watch('hasPhone', false);
    const onSubmit = async (data, e) => {
        e.preventDefault();
        setError(false);
        const user = {
            ...data,
        };
        try {
            fetch('https://fierce-hollows-24915.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        alert('Your Registration Successfully Done!');
                    }
                });
        } catch (err) {
            setError(true);
            console.log(error);
        }
        setValues(data);
        history.push('/login');
        console.log(data);
    };

    return (
        <MainContainer className='login_container'>
            <Typography>Register Now</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('firstName')} type='text' label='First Name' name='firstName' error={!!errors.firstName} helperText={errors?.firstName?.message} />
                <Input {...register('lastName')} type='text' label='Last Name' name='lastName' error={!!errors.lastName} helperText={errors?.lastName?.message} />
                <Input {...register('email')} type='text' label='Email' name='email' error={!!errors.email} helperText={errors?.email?.message} required />
                <FormControlLabel control={<input type='checkbox' defaultValue={data.hasPhone} defaultChecked={data.hasPhone} {...register('hasPhone')} color='primary' name='hasPhone' />} label='Do you have a Phone?' />
                {hasPhone && (
                    <Input
                        {...register('phoneNumber')}
                        type='tel'
                        label='Phone Number'
                        name='phoneNumber'
                        onChange={(event) => {
                            event.target.value = normalizePhoneNumber(event.target.value);
                        }}
                    />
                )}
                <Input {...register('password')} type='text' label='Password' name='password' error={!!errors.password} helperText={errors?.password?.message} required />
                <PrimaryButton>Register</PrimaryButton>
            </Form>
        </MainContainer>
    );
};

export default RegistrationForm;
