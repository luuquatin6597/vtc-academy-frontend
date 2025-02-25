import { Button } from "antd";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        if (counter === 0) return;
        setCounter(counter - 1);
    }

    return (
        <>
            <h1 className="font-bold">Exercise 5: Counter</h1>
            <p>Use the buttons below to increase or decrease the counter</p>

            <div className="flex gap-4 items-center mt-4">
                <Button onClick={handleDecrease}>-</Button>
                <span>{counter}</span>
                <Button onClick={handleIncrease}>+</Button>
            </div>
        </>
    )
}