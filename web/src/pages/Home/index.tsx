import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <main className="todo-container">
        <h1>To Do List</h1>
        <form action="#">
          <Input name="todo" label="todo" placeholder="todo" />
          <Button name="Criar ToDo" />
        </form>
      </main>
    </div>
  );
};

export default Home;
