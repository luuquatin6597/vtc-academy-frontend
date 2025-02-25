import { Button, Form, Input, Select, Space } from 'antd'
import { ToDoList } from '../../../interface/toDoList'
import { useDispatch, useSelector } from 'react-redux'
import { addToDoList } from '../../../reducer/toDoList.reducer'
import { RootState } from '../../../store/store';

const { Option } = Select

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
}
export const generateId = () => {
    return (Math.floor(Math.random() * 900000) + 100000).toString()
}

export default function FormComponent() {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categoryList.list);

    const onFinish = (values: ToDoList) => {
        const newToDoList: ToDoList = { ...values, id: generateId() }
        console.log('Success:', values)
        dispatch(addToDoList({ list: [newToDoList] }))
    }

    const onReset = () => {
        form.resetFields()
    }

    return (
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish} style={{ maxWidth: 600 }}>
            <Form.Item name='category' label='Category' rules={[{ required: true }]}>
                <Select placeholder='Select a option and change input text above' allowClear>
                    {categories.map((category) => (
                        <Option key={category.id} value={category.id}>
                            {category.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name='image' label='Image' rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='title' label='Title' rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='content' label='Content' rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                    <Button htmlType='button' onClick={onReset}>
                        Reset
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
