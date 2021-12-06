
import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { signin, signup } from '../api/user';
import { authenticate } from '../authenticate';

const Signin = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        signin(data)
            .then(({ data }) => {
                authenticate(data);
                if (data.user.id === 1) {
                    navigate('/admin/')
                } else {
                    navigate('/')
                }

            })
            .catch(error => {

            })
    }
    return (
        <div>
            <h1>Đăng nhập</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span>Field is required</span>}
                <label>Password</label>
                <input type="password" {...register('password')} />
                <button >Đăng nhập</button>
            </form>
        </div>
    )
}

export default Signin
