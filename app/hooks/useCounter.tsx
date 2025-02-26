import { useState } from "react";

export default function useCounter() {
    const [counter, setCounter] = useState(0);
    const [min, setMin] = useState<number | null>(0);
    const [max, setMax] = useState<number | null>(0);

    const handleIncrease = () => {
        if (max !== null && counter >= max) return;
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        if (min !== null && counter <= min) return;
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    const handleLimit = (min: number, max: number) => {
        setMin(min);
        setMax(max);
    }

    return {
        counter,
        handleIncrease,
        handleDecrease,
        handleReset,
        handleLimit
    }
}