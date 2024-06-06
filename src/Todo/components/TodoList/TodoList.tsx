import TodoItem from "../TodoItem";

export type TodoListProps = {
  todoList: string[],
  deleteTodoItem: (index: number) => void
};
export default function TodoList({todoList, deleteTodoItem}: TodoListProps) {
  return  (
    todoList.length ?
      <ul className="flex flex-col px-2 mt-5">
          {
            todoList?.map((listItem, index) => <TodoItem key={index} item={listItem} index={index} deleteTodoItem={deleteTodoItem}/>)
          }
      </ul>
    : null
  );
}
