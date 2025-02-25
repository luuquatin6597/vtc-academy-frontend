import * as React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormData {
    [key: string]: string;
}

export interface InputProps {
    label?: string;
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, name, register, errors }) => {
    const errorMessage = errors[name]?.message as string | undefined;
    return (
        <div className="mb-4">
            {label && (
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, { required: `${label} is required` })}
                className={`w-full px-4 py-2 border ${errorMessage && 'border-red-500'} rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400`}
            />
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    );
};

export default Input;