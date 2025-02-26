import { useState, useCallback } from "react";

export default function useCounter() {
    const [counter, setCounter] = useState(0);
    const [minLimit, setMinLimit] = useState<number | null>(null);
    const [maxLimit, setMaxLimit] = useState<number | null>(null);

    const handleIncrease = useCallback(() => {
        if (maxLimit !== null && counter >= maxLimit) return;
        setCounter(counter + 1);
    }, [counter, maxLimit]);

    const handleDecrease = useCallback(() => {
        if (minLimit !== null && counter <= minLimit) return;
        setCounter(counter - 1);
    }, [counter, minLimit]);

    const handleReset = useCallback(() => {
        setCounter(0);
    }, []);

    const handleLimit = useCallback((min: number, max: number) => {
        setMinLimit(min);
        setMaxLimit(max);
    }, []);

    return {
        counter,
        handleIncrease,
        handleDecrease,
        handleReset,
        handleLimit
    }
}