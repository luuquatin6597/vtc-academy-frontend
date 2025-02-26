import { Button, Input } from "antd";
import { useState } from "react";

export default function SimpleButton() {
    const [inputValue, setInputValue] = useState<string>('');

    const showAlert = () => {
        alert(`Current value: ${inputValue}`);

    }

    return (
        <>
            <h1 className="font-bold">Exercise 2: Managing User Input with State Hook</h1>
            <p>Use useState to manage input</p>
            <div className="flex gap-2">
                <Input className="my-2" onChange={(e) => setInputValue(e.target.value)} />
                <Button onClick={showAlert} className="mt-2">
                    Show
                </Button>
            </div>
        </>
    )
}