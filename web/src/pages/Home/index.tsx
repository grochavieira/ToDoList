import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="home-container">
      <main className="todo-container">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <Input
            value={todo}
            setValue={setTodo}
            name="todo"
            label="todo"
            placeholder="todo"
          />
          <Button name="Criar ToDo" />
        </form>

        <div className="todo-list-cotainer"></div>
      </main>
    </div>
  );
};

export default Home;
