import { TbTrashX } from "react-icons/tb";

export type TodoItemProps = {
  item: string,
  index: number,
  deleteTodoItem:(index: number) => void
};

export default function TodoItem({item, index, deleteTodoItem}: TodoItemProps) {
  return (
    <li className="flex items-center justify-between px-2 py-4 font-medium capitalize border-b border-gray-200 last:border-0">
      <span>{item}</span> 
      <TbTrashX className="text-red-800 cursor-pointer" onClick={() => deleteTodoItem(index)} />
    </li>
  );
}