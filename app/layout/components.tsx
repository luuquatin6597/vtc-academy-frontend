import Image from "next/image";
import List from "../components/lab2/list";
import Btn from "../components/lab2/btn";

import React from "react";
import LoginForm from "../components/lab2/loginForm";

interface Item {
    name: string;
    category: string;
}

export default function Components() {
    const items: Item[] = [
        {
            name: "My Tam",
            category: "Music",
        },
        {
            name: "Ho Ngoc Ha",
            category: "Music",
        },
        {
            name: "Quang Hung MasterD",
            category: "Music",
        },
        {
            name: "Son Tung M-TP",
            category: "Music",
        },
        {
            name: "Duc Phuc",
            category: "Music",
        },
        {
            name: "Justin Bieber",
            category: "Music",
        },
    ];

    return (
        <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="w-full max-w-lg p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Popular Songs</h5>
                    <a href="#" className="text-sm font-medium hover:underline">
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <List items={items} />
                </div>
            </div>

            <div className="w-full mx-auto max-w-lg p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-6 text-center center">
                    <Image className="mb-5 mx-auto" src="/vtca-logo.png" alt="Logo" width={150} height={24} />
                    <h5 className="mb-5 text-xl font-bold leading-none text-gray-900 dark:text-white">VTC ACADEMY</h5>
                    <p className="text-blue-400">Sign in to your account</p>
                </div>
                <div className="mb-6">
                    <Btn className="mb-4" title="Sign in with Google">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#4285F4" d="M24 9.5c3.1 0 5.7 1.1 7.8 3.1l5.8-5.8C33.4 3.5 28.9 1.5 24 1.5 14.8 1.5 7.2 7.8 4.7 16.1l6.9 5.4C13.1 14.5 18.1 9.5 24 9.5z" />
                            <path fill="#34A853" d="M46.5 24c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3.1-2.4 5.7-4.9 7.5l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.9z" />
                            <path fill="#FBBC05" d="M11.6 28.5c-1.1-3.1-1.1-6.5 0-9.6l-6.9-5.4C2.1 17.2 1.5 20.5 1.5 24s.6 6.8 2.2 10.5l6.9-5.4z" />
                            <path fill="#EA4335" d="M24 46.5c5.9 0 10.9-2 14.5-5.4l-7.6-5.9c-2.1 1.4-4.7 2.3-7.8 2.3-5.9 0-10.9-4-12.7-9.5l-6.9 5.4C7.2 40.2 14.8 46.5 24 46.5z" />
                        </svg>
                    </Btn>
                    <Btn className="mb-4" title="Sign in with GitHub">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.012-1.244-.017-2.255-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.877.12 3.18.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.217.698.825.58C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </Btn>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="w-2/5 border-b border-gray-300 dark:border-gray-600"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">OR</p>
                    <div className="w-2/5 border-b border-gray-300 dark:border-gray-600"></div>
                </div>

                <div className="flow-root">
                    <LoginForm />
                </div>
            </div>
        </main>
    );
}