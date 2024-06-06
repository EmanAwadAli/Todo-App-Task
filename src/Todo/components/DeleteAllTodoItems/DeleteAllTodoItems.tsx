export type DeleteAllTodoTasksProps = {
  deleteAllTodoItems: any
};
export default function DeleteAllTodoTasks({deleteAllTodoItems}: DeleteAllTodoTasksProps) {
  return (
    <button className="w-full h-12 font-medium text-white bg-red-800 rounded-lg" onClick={deleteAllTodoItems}>Delete All Tasks</button>
  );
}