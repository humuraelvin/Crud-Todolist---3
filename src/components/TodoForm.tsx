import React, { Dispatch, SetStateAction, useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../todoService";

interface propTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<propTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodos(newTodoText);
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add A task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default TodoForm;
