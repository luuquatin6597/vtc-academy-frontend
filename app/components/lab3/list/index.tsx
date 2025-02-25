
import React, { useState } from 'react'
import { List, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListItem from '../listItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { ToDoList } from '../../../interface/toDoList';
import { deleteToDoList, updateToDoList } from '../../../reducer/toDoList.reducer';
import ConfirmModal from '../modals/confirmModal';
import UpdateModal from '../modals/updateModal';


export default function ListComponent() {
    const toDoList = useSelector((state: RootState) => state.toDoList.list);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState<ToDoList | null>(null);
    const [deleteId, setDeleteId] = useState<ToDoList["id"] | null>(null);

    const showDeleteConfirmModal = (id: ToDoList["id"]) => {
        setDeleteId(id);
        setIsModalVisible(true);
    };

    const handleDelete = (id: ToDoList["id"]) => {
        if (id !== null) {
            dispatch(deleteToDoList({ id }));
            setIsModalVisible(false);
            setDeleteId(null);
        }
    };

    const showUpdateModal = (item: ToDoList) => {
        setCurrentItem(item);
        setIsUpdateModalVisible(true);
    };

    const handleUpdate = (values: ToDoList) => {
        if (currentItem) {
            dispatch(updateToDoList({ ...currentItem, ...values }));
            setIsUpdateModalVisible(false);
            setCurrentItem(null);
        }
    };

    return (
        <div
            id="scrollableDiv "
            style={{
                height: 400,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <InfiniteScroll
                dataLength={toDoList.length}
                next={() => { }}
                hasMore={false}
                loader={<></>}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={toDoList}
                    renderItem={(item: ToDoList, index: number) => (
                        <ListItem
                            item={item}
                            index={index}
                            showDeleteConfirmModal={() => showDeleteConfirmModal(item.id)}
                            showUpdateModal={() => showUpdateModal(item)}
                        />
                    )}
                />
            </InfiniteScroll>
            <ConfirmModal title='Delete'
                content={`Are you sure you want to delete ${deleteId}?`}
                isModalVisible={isModalVisible}
                handleDelete={() => handleDelete(deleteId!)}
                handleCancel={() => setIsModalVisible(false)} />

            {currentItem && (
                <UpdateModal
                    title={currentItem.title}
                    content={currentItem.content}
                    category={currentItem.category}
                    image={currentItem.image}
                    isModalVisible={isUpdateModalVisible}
                    handleUpdate={handleUpdate}
                    handleCancel={() => setIsUpdateModalVisible(false)}
                />
            )}
        </div>
    )
}