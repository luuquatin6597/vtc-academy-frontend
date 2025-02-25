import { Input } from "antd";
import { useState } from "react";

export default function InputHandling() {
    const [result, setResult] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResult(e.target.value);
    }

    return (
        <>
            <h1 className="font-bold">Exercise 2: Input handling</h1>
            <p>Fill input below to see the result</p>
            <Input className="my-2" onChange={onChange} />
            <p>Result: {result}</p>
        </>
    )
}
