import TodoMongezAtom from "./components/TodoMongezAtom";
import TodoRecoilAtom from "./components/TodoRecoilAtom";

export default function Todo() {
  return (
    
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 px-4">
        <TodoMongezAtom/>
        <TodoRecoilAtom/>
      </div>

  );
}
