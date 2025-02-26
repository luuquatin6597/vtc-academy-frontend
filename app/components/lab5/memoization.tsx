import { useMemo, useState } from "react";

const bgColors = { red: 'bg-red-500', blue: 'bg-blue-500' };
const contentText = { hover: 'Hover me!', hovered: 'Hovered!' };

export default function Memoization() {
    const [isHovered, setIsHovered] = useState(false);

    const bgColor = useMemo(() => {
        return isHovered ? bgColors.red : bgColors.blue;
    }, [isHovered]);

    const content = useMemo(() => {
        return isHovered ? contentText.hovered : contentText.hover;
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <>
            <h1 className="font-bold">Exercise 3: Implementing Memoization with useMemo</h1>
            <p>Hover over the element below to change color</p>
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`mt-2 w-[150px] h-[150px] flex items-center justify-center ${bgColor} rounded-md text-white transition duration-300 ease-in-out`}>
                {content}
            </div>
        </>
    )
}