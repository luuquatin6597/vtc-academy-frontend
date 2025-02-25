import { List, Switch } from 'antd';
import { ToDoList } from '../../../interface/toDoList';
import EditIcon from '../icons/edit';
import DeleteIcon from '../icons/delete';
import { useDispatch, useSelector } from 'react-redux';
import { switchToDoList } from '../../../reducer/toDoList.reducer';
import { RootState } from '../../../store/store';

interface ListItemProps {
    item: ToDoList;
    index: number;
    showDeleteConfirmModal: (id: ToDoList["id"]) => void;
    showUpdateModal: (item: ToDoList) => void;
}

export default function ListItem({ item, index, showDeleteConfirmModal, showUpdateModal }: ListItemProps) {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.categoryList.list);

    const handleSwitch = (id: ToDoList["id"]) => {
        if (id !== null) {
            dispatch(switchToDoList({ id }))
        }
    }

    return (
        <List.Item
            className={`${index}`}
            key={item.id}
            actions={[
                <Switch
                    key="list-switch"
                    checkedChildren="Publish"
                    unCheckedChildren="Unpublish"
                    checked={item.status}
                    onChange={() => handleSwitch(item.id)}
                />,
                <span key="list-edit" onClick={() => showUpdateModal(item)}><EditIcon fill="#1890ff" className="h-[20px] w-[20px] cursor-pointer" /></span>,
                <span key="list-delete" onClick={() => showDeleteConfirmModal(item.id)}><DeleteIcon fill="#1890ff" className="h-[20px] w-[20px] cursor-pointer" /></span>
            ]}
        >
            <List.Item.Meta
                avatar={<img src={item.image} alt={item.title} className="h-[50px] w-[50px] object-cover rounded-full" />}
                title={<a href="">{categories.find((category) => category.id === item.category)?.name} - {item.title}</a>}
                description={item.content}
            />
        </List.Item>
    );
}