"use client";

import * as React from 'react';
import BtnIcon from './btnIcon';

interface ItemProps {
    item: { name: string; category: string };
    index: number;
}

const handleClick = () => {
    console.log('Button clicked!');
};

const Item: React.FC<ItemProps> = ({ item, index }) => {
    return (
        <div className="flex items-center gap-5">
            <div className="shrink-0">
                <img
                    className="w-10 h-10 rounded"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="shrink-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{index + 1}</p>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {item.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {item.category}
                </p>
            </div>
            <div className="flex gap-[10px] items-center text-base font-semibold text-gray-900 dark:text-white">
                <BtnIcon onClick={handleClick}>
                    <svg className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                </BtnIcon>
                <BtnIcon onClick={handleClick}>
                    <svg className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
                </BtnIcon>
                <BtnIcon onClick={handleClick}>
                    <div className="flex flex-col gap-[2px]">
                        <span className="bg-current h-[2px] rounded w-[2px] rounded shrink-0"></span>
                        <span className="bg-current h-[2px] rounded w-[2px] rounded"></span>
                        <span className="bg-current h-[2px] rounded w-[2px] rounded"></span>
                    </div>
                </BtnIcon>
            </div>
        </div>
    );
};

export default Item;