import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { signin, signup } from '../api/user';
import { authenticate } from '../authenticate';

const Signup = (props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {

        signup(data)
            .then(() => {
                navigate('/signin')
            })
            .catch((errors) => {
                //  console.log(errors.JSON.stringify());
            })
    }
    return (
        <div>
            <h1>Đăng ký</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span>Field is required</span>}
                <label>Password</label>
                <input type="password" {...register('password')} />
                <button >Đăng ký</button>
            </form>
        </div>
    )
}

export default Signup
