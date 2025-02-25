import { Button } from "antd";

export default function SimpleButton() {
    const showAlert = () => {
        alert('Hello, world!');
    }
    return (
        <>
            <h1 className="font-bold">Exercise 1: Simple button click</h1>
            <p>Click button below to show alert</p>
            <Button onClick={showAlert} className="mt-2">
                Click me
            </Button>
        </>
    )
}