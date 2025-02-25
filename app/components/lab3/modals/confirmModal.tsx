import { Modal } from "antd";

interface ConfirmModalProps {
    title: string;
    content: string;
    isModalVisible: boolean;
    handleDelete: () => void;
    handleCancel: () => void;
}

export default function ConfirmModal({ title, content, isModalVisible, handleDelete, handleCancel }: ConfirmModalProps) {
    return (
        <Modal
            title={title}
            open={isModalVisible}
            onOk={handleDelete}
            onCancel={handleCancel}
        >
            <p>{content}</p>
        </Modal>
    );
}