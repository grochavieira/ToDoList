import React from "react";
import { FiTrash2 } from "react-icons/fi";

import "./styles.css";

interface ToDoProps {
  value: string;
}

const ToDo: React.FC<ToDoProps> = ({ value }) => {
  return (
    <div className="todo-block">
      <div className="checkbox-block">
        <input type="checkbox" name="" id="" />
      </div>
      <div className="todo-value">{value}</div>
      <div className="delete-button">
        <button>
          <FiTrash2 className="r-icon" size={24} />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
