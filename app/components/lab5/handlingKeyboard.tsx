"use client"

import { Button, Form, Input } from "antd";
import { useMemo, useState } from "react";

interface FormData {
    number: number;
}

export default function HandlingKeyboard() {
    const [form] = Form.useForm();
    const [listRender, setListRender] = useState([] as string[]);
    const [total, setTotal] = useState<number>(0);

    const handleFinishForm = (values: FormData) => {
        console.log('Success:', values);
        setListRender([...listRender, values.number.toString()]);
        form.resetFields();
    };

    const calculateTotal = () => {
        const sum = listRender.reduce((total, num) => total + parseInt(num), 0);
        setTotal(sum);
    }

    const handleDelete = (index: number) => {
        const updatedList = [...listRender];
        updatedList.splice(index, 1);
        setListRender(updatedList);
        calculateTotal();
    }

    useMemo(() => calculateTotal(), [listRender]);

    return (
        <>
            <h1 className="font-bold">Exercise 4: Sum Calculation with useMemo</h1>
            <p>Fill input and press Enter to add to the list</p>

            <Form form={form} name='control-hooks' onFinish={handleFinishForm} className="mt-2">
                <div className="flex gap-2">
                    <Form.Item className="w-full" name='number' label="Number">
                        <Input className="w-full" autoFocus type="number" placeholder="Fill number and press 'Enter'" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Add</Button>
                    </Form.Item>
                </div>
            </Form>

            <ul className="my-2 border border-gray-300 rounded-md">
                {listRender.length === 0 ? <li className="p-2">No data</li> : (
                    listRender.map((item, index) => (
                        <li className={`${index > 0 && 'border-t border-gray-300'} p-2 flex items-center gap-2 justify-between`} key={index}>
                            <span>Number: {item}</span>
                            <Button onClick={() => handleDelete(index)}>Delete</Button>
                        </li>
                    ))
                )}
            </ul>

            <div className="bg-gray-100 rounded-md p-2">{total}</div>
        </>
    );
}