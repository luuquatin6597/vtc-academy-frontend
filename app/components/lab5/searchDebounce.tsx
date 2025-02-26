import { useCallback, useRef, useState } from "react";
import { Input, Spin } from 'antd';

const { Search } = Input;

export default function SearchDebounce() {
    const [result, setResult] = useState<string>('');
    const [bouncing, setBouncing] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleDebounce = useCallback((value: string) => {
        setBouncing(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            console.log(value);
            setResult(value);
            setBouncing(false);
        }, 1000);
    }, []);

    return (
        <>
            <h1 className="font-bold">Exercise 5: Debouncing Search with useCallback</h1>
            <p>Fill input below to see the result</p>
            <Search placeholder="Input search text" onChange={(e) => handleDebounce(e.target.value)} />

            <div className="relative">
                {bouncing &&
                    <>
                        <Spin className="absolute top-1/2 left-1/2" />
                        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50">
                        </div>
                    </>
                }

                {result === '' ? <p className="pb-4 mt-4 text-center text-gray-400">No result found</p> : (
                    [1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="pb-4 mt-4 border-b border-gray-100">
                            <h3>Result {index} for: &quot;{result}&quot;</h3>
                            <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus cupiditate quis officiis quasi nisi, fugit minima recusandae officia dignissimos! At, voluptates quis? Amet harum odit enim neque provident, doloribus laboriosam.</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}