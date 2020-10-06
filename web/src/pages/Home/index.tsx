import React, { FormEvent, useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ToDo, { IToDo } from "../../components/ToDo";
import "./styles.css";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<Array<IToDo>>([]);
  const [checkboxChange, setCheckboxChange] = useState(false);

  useEffect(() => {
    const jsonTodoList = localStorage.getItem("todoList");
    if (jsonTodoList) {
      setTodoList(JSON.parse(jsonTodoList));
    }
  }, []);

  useEffect(() => {
    const jsonTodoList = JSON.stringify(todoList);
    localStorage.setItem("todoList", jsonTodoList);
  }, [todoList, checkboxChange]);

  function handleDelete(index: number) {
    let newTodoList = todoList.filter((todo, idx) => idx !== index);
    setTodoList(newTodoList);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const todoObject = {
      value: todo,
      completed: false,
    };
    setTodoList([...todoList, todoObject]);
    setTodo("");
  }

  function handleCheckbox(index: number) {
    const newTodoList = todoList;
    const checkValue = newTodoList[index].completed;
    newTodoList[index].completed = !checkValue;
    setTodoList(newTodoList);
    setCheckboxChange(!checkboxChange);
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

        {todoList.length > 0 ? (
          <div className="todo-list-container">
            {todoList.map((todo, index) => (
              <ToDo
                key={index}
                todo={todo}
                index={index}
                setCheckboxValue={handleCheckbox}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Home;
