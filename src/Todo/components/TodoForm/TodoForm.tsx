import { useState } from "react";

export type TodoFormProps = {
  submit: (todo: string) => void
};
export default function TodoForm({submit}: TodoFormProps) {

  const [value, setValue] = useState<string>("");

  // Handle form submit
  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    if(!value) return;
    submit(value);
    setValue('');
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex h-16 p-2 bg-gray-200 rounded-lg">
      <input
        className="w-full bg-transparent focus:outline-none px-2"
        type="text" 
        placeholder="Todo Task" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="min-w-fit h-full px-5 text-white font-medium bg-violet-900 rounded-lg hover:bg-violet-500 transition-all duration-500 ease-in-out">Add Task</button>
    </form>
  );
}
