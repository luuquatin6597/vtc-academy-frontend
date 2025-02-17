import * as React from 'react';

export interface InputProps {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
            />
        </div>
    );
};

export default Input;