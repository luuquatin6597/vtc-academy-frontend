import { useState } from "react";

export default function MouseEvents() {
    const [bgColor, setBgColor] = useState('bg-blue-500');
    const [content, setContent] = useState('Hover me!');

    const handleMouseEnter = () => {
        setBgColor('bg-red-500');
        setContent('Hovered!');
    }

    const handleMouseLeave = () => {
        setBgColor('bg-blue-500');
        setContent('Hover me!');
    }

    return (
        <>
            <h1 className="font-bold">Exercise 3: Mouse events</h1>
            <p>Hover over the element below to change color</p>
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`mt-2 w-[150px] h-[150px] flex items-center justify-center ${bgColor} rounded-md text-white transition duration-300 ease-in-out`}>
                {content}
            </div>
        </>
    )
}