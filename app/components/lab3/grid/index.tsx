import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Image from 'next/image';
import { useEffect } from "react";

export default function GridComponent() {
    const categories = useSelector((state: RootState) => state.categoryList.list);
    const toDoList = useSelector((state: RootState) => state.toDoList.list);

    useEffect(() => {
        console.log(toDoList);
    }, [toDoList]);

    return (
        <div className="mt-[48px]">
            {categories.map((category) => {
                const filter = toDoList.filter((item) => item.category === category.id);
                if (filter.length === 0) {
                    return (
                        <div key={category.id} className="mb-[48px]">
                            <h3 className="text-[20px] mb-[20px] font-bold">{category.name}</h3>
                            <div className="grid grid-cols-4 gap-[24px]">
                                <div className="text-[14px] col-span-4">No data</div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={category.id} className="mb-[48px]">
                            <h3 className="text-[20px] mb-[20px] font-bold">{category.name}</h3>
                            <div className="grid grid-cols-4 gap-[24px]">
                                {toDoList
                                    .filter((item) => item.category === category.id && item.status)
                                    .map((item) => (
                                        <div className="" key={item.id}>
                                            <figure className="relative pt-[100%]">
                                                <Image className="rounded-[5px] absolute top-0 left-0" src={item.image} alt={item.title} width={300} height={200} />
                                            </figure>
                                            <div className="mt-[12px]">
                                                <h4 className="text-[13px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold">{item.title}</h4>
                                                <p className="text-[14px] line-clamp-2">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}