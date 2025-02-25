import * as React from 'react';
import Btn from './btn';
import Input from './input';
import { useForm, SubmitHandler } from "react-hook-form";

export interface IFormInput {
    email: string;
    password: string;
}

export function LoginForm() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IFormInput>({
        defaultValues: {
            email: 'admin@gmail.com',
            password: '12345'
        }
    });
    const onSubmit: SubmitHandler<IFormInput> = data => {
        if (data.email !== 'admin@gmail.com' || data.password !== '12345') {
            if (data.email !== 'admin@gmail.com') {
                setError('email', { type: 'manual', message: 'Email is incorrect' });
            }
            if (data.password !== '12345') {
                setError('password', { type: 'manual', message: 'Password is incorrect' });
            }
        } else {
            alert('Login successful');
            console.log('Login successful');
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email" type="email" placeholder="Email" name="email" register={register} errors={errors} />
            <Input label="Password" type="password" placeholder="Password" name="password" register={register} errors={errors} />
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember" type="checkbox" className="w-4 h-4 text-blue-400 bg-gray-100 rounded border-gray-300 focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800" />
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" className="text-sm font-medium hover:underline text-blue-500">Forgot password?</a>
            </div>
            <Btn title="Sign in" type="submit" color="blue-400" />
        </form>
    );
}

export default LoginForm;