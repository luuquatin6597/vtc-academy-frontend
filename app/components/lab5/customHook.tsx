import { Button } from "antd";
import useCounter from '../../hooks/useCounter';
import { useEffect, useCallback } from 'react';

export default function CustomHook() {
    const { counter, handleIncrease, handleDecrease, handleReset, handleLimit } = useCounter();
    const limit = { min: -10, max: 10 };

    const setLimits = useCallback(() => {
        handleLimit(limit.min, limit.max);
    }, [handleLimit, limit.min, limit.max]);

    useEffect(() => {
        setLimits();
    }, [setLimits]);

    return (
        <>
            <h1 className="font-bold">Exercise 1: Creating and Using a Counter Hook</h1>
            <p>Use custom hook useCounter to increase or decrease the counter</p>

            <div className="flex gap-4 items-center my-4">
                <Button onClick={handleDecrease}>-</Button>
                <span>{counter}</span>
                <Button onClick={handleIncrease}>+</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>

            <p>Limit: from {limit.min} to {limit.max}</p>
        </>
    )
}