import React from "react";
import { FiTrash2 } from "react-icons/fi";

import "./styles.css";

export interface IToDo {
  value: string;
  completed: boolean;
}

interface ToDoProps {
  todo: IToDo;
  index: number;
  onDelete: (index: number) => void;
  setCheckboxValue: (index: number) => void;
}

const ToDo: React.FC<ToDoProps> = ({
  todo,
  onDelete,
  index,
  setCheckboxValue,
}) => {
  return (
    <div className="todo-block">
      <div onClick={() => setCheckboxValue(index)} className="checkbox-block">
        <input
          onChange={() => {}}
          checked={todo.completed}
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <div className="todo-value">{todo.value}</div>
      <div className="delete-button">
        <button onClick={() => onDelete(index)}>
          <FiTrash2 className="r-icon" size={24} />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
