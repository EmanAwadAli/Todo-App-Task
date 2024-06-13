import { useEffect } from "react";
import cache from "@mongez/cache";
import { todoListMongezAtom } from "../../atoms/todoList-mongez-atom";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import DeleteAllTodoItems from "../DeleteAllTodoItems";

export default function TodoMongezAtom() {

  const [todoList, setTodoList] = todoListMongezAtom.useState();

  useEffect(() => {
    if (!cache.get("todoMongez")) {
      cache.set("todoMongez", []);
    }
  }, []);

  // Add new item to todo list
  const addTodoItem = (todo:string) => {
    const todoListUpdated = [...todoList, todo];
    setTodoList(todoListUpdated)    
    cache.set("todoMongez", todoListUpdated);
  }

  // Delete item from todo list
  const deleteTodoItem = (index:number) => {
    const todoListUpdated = [...todoList];
    todoListUpdated.splice(index, 1);
    setTodoList(todoListUpdated);
    cache.set("todoMongez", todoListUpdated);
  }

  // Delete all todo list items
  const deleteAllTodoItems = () => {
    setTodoList([]);
    cache.remove("todoMongez");
  }
 
  return (
    <div className="w-full p-5 mt-10 m-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl mb-4 font-bold">Todo Using <span className="text-[#b28923]">Mongez</span> Atom</h2>
      <TodoForm className="mongez" submit= {addTodoItem}/>
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem}/>
      {
        todoList.length > 1 ? <DeleteAllTodoItems deleteAllTodoItems={deleteAllTodoItems} /> : ""
      }
    </div>
  );
}
