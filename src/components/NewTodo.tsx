import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import style from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
