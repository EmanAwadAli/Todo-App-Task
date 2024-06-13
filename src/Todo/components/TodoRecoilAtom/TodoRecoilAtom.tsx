import { useEffect } from "react";
import cache from "@mongez/cache";
import { useRecoilState } from "recoil";
import { todoListRecoilState } from "../../atoms/todolist-recoil-atom";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import DeleteAllTodoItems from "../DeleteAllTodoItems";

export default function TodoRecoilAtom() {

  const [todoList, setTodoList] = useRecoilState(todoListRecoilState);

  useEffect(() => {
    if (!cache.get("todoRecoil")) {
      cache.set("todoRecoil", []);
    }
  }, []);

  // Add new item to todo list
  const addTodoItem = (todo:string) => {
    const todoListUpdated = [...todoList, todo];
    setTodoList(todoListUpdated)    
    cache.set("todoRecoil", todoListUpdated);
  }

  // Delete item from todo list
  const deleteTodoItem = (index:number) => {
    const todoListUpdated = [...todoList];
    todoListUpdated.splice(index, 1);
    setTodoList(todoListUpdated);
    cache.set("todoRecoil", todoListUpdated);
  }

  // Delete all todo list items
  const deleteAllTodoItems = () => {
    setTodoList([]);
    cache.remove("todoRecoil");
  }
 
  return (
    <div className="w-full p-5 mt-10 m-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl mb-4 font-bold">Todo Using <span className="text-[#3578e5]">Recoil</span> Atom</h2>
      <TodoForm className="recoil" submit= {addTodoItem}/>
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem}/>
      {
        todoList.length > 1 ? <DeleteAllTodoItems deleteAllTodoItems={deleteAllTodoItems} /> : ""
      }
    </div>
  );
}
