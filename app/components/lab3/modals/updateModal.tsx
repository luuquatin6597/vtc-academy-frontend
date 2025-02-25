import { Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const { Option } = Select;

interface UpdateModalProps {
    image: string;
    title: string;
    content: string;
    category: string;
    isModalVisible: boolean;
    handleUpdate: (values: any) => void;
    handleCancel: () => void;
}

export default function UpdateModal({ image, title, content, category, isModalVisible, handleUpdate, handleCancel }: UpdateModalProps) {
    const [form] = Form.useForm();
    const categories = useSelector((state: RootState) => state.categoryList.list);


    useEffect(() => {
        form.setFieldsValue({ image, title, content, category });
    }, [image, title, content, category, form]);

    return (
        <Modal
            title="Update ToDo"
            open={isModalVisible}
            onOk={() => form.submit()}
            onCancel={handleCancel}
        >
            <Form form={form} onFinish={handleUpdate}>
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
            </Form>
        </Modal>
    );
}