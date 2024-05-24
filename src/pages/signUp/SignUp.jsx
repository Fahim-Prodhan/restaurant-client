import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from "react-hook-form"

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("name",{required:true})} type="text"  placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email",{required:true})} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password",{required:true,maxLength: 20, minLength:6, pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/})} type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {errors.password?.type ==='required' && <span className='text-red-600'>This field is required</span>}
                                {errors.password?.type ==='minLength' && <span className='text-red-600'>Password Must be 6</span>}
                                {errors.password?.type ==='maxLength' && <span className='text-red-600'>Password Must be less than 20</span>}
                                {errors.password?.type ==='pattern' && <span className='text-red-600'>Password Must have Upper Lower special Character</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;