import { Form, Input } from "antd";
import { useState } from "react";

interface FormData {
    text: string;
}

export default function KeyboardEvents() {
    const [form] = Form.useForm();
    const [listRender, setListRender] = useState([] as string[]);

    const handleFinishForm = (values: FormData) => {
        console.log('Success:', values);
        setListRender([...listRender, values.text]);
        form.resetFields();
    };

    return (
        <>
            <h1 className="font-bold">Exercise 4: Keyboard events</h1>
            <p>Fill input and press Enter to add to the list</p>
            <Form form={form} name='control-hooks' onFinish={handleFinishForm} className="mt-2">
                <Form.Item name='text' label="Text">
                    <Input autoFocus type="text" placeholder="Fill text and press 'Enter'" />
                </Form.Item>
            </Form>
            <ul className="mt-2 border border-gray-300 rounded-md">
                {listRender.length === 0 ? <li className="p-2">No data</li> : (
                    listRender.map((item, index) => (
                        <li className={`${index > 0 && 'border-t border-gray-300'} p-2`} key={index}>{index + 1}. {item}</li>
                    ))
                )}
            </ul>
        </>
    );
}