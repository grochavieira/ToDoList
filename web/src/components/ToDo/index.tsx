import React from "react";
import { FiTrash2 } from "react-icons/fi";

import "./styles.css";

interface ToDoProps {
  value: string;
  index: number;
  onDelete: (index: number) => void;
}

const ToDo: React.FC<ToDoProps> = ({ value, onDelete, index }) => {
  return (
    <div className="todo-block">
      <div className="checkbox-block">
        <input type="checkbox" name="" id="" />
      </div>
      <div className="todo-value">{value}</div>
      <div className="delete-button">
        <button onClick={() => onDelete(index)}>
          <FiTrash2 className="r-icon" size={24} />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
