import * as React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { IFormInput } from './loginForm'; // Import để sử dụng kiểu form

export interface InputProps {
    label?: string;
    type: string;
    placeholder: string;
    name: keyof IFormInput; // ✅ Giới hạn name trong IFormInput
    register: UseFormRegister<IFormInput>; // ✅ Sửa any thành IFormInput
    errors: FieldErrors<IFormInput>; // ✅ Sửa any thành IFormInput
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, name, register, errors }) => {
    const errorMessage = errors[name]?.message?.toString(); // ✅ Đảm bảo kiểu dữ liệu

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
