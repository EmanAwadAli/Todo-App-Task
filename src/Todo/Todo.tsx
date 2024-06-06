import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import cache from "@mongez/cache";
import DeleteAllTodoItems from "./components/DeleteAllTodoItems";

export default function Todo() {
  const [todoList, setTodoList] = useState<string[]>(cache.get("todo") && cache.get("todo") || []);

  useEffect(() => {
    if (!cache.get("todo")) {
      cache.set("todo", []);
    }
  }, []);

  // Add new item to todo list
  const addTodoItem = (todo:string) => {
    const todoListUpdated = [...todoList, todo];
    setTodoList(todoListUpdated);
    cache.set("todo", todoListUpdated);
  }

  // Delete item from todo list
  const deleteTodoItem = (index:number) => {
    const todoListUpdated = [...todoList];
    todoListUpdated.splice(index, 1);
    setTodoList(todoListUpdated);
    cache.set("todo", todoListUpdated);
  }

  // Delete all todo list items
  const deleteAllTodoItems = () => {
    setTodoList([]);
    cache.remove("todo");
  }
 
  return (
    <div className="w-1/2 min-w-[290px] max-w-[500px] p-5 mt-10 m-auto bg-white rounded-lg shadow-lg">
      <TodoForm submit= {addTodoItem}/>
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem}/>
      {
        todoList.length > 1 ? <DeleteAllTodoItems deleteAllTodoItems={deleteAllTodoItems} /> : ""
      }
    </div>
  );
}
