"use client";

import * as React from 'react';

export interface BtnProps {
  title: string;
  type?: 'submit' | 'button' | 'reset';
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Btn: React.FC<BtnProps> = ({ title, type = 'button', color, onClick, children, className }) => {
  return (
    <button
      type={type}
      className={`${className} w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-white ${type === 'submit' ? 'bg-blue-600 border-blue-600' : 'bg-primary'} ${color ?? ''} focus:outline-none`}
      onClick={onClick}
    >
      {children}
      <span>{title}</span>
    </button>
  );
};

export default Btn;