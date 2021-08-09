import React from "react";
import FormTodo from "./components/Todos/FormTodo";
import Todos from "./components/Todos/Todos";
// with typescript in react, we use .tsx below the file

function App() {

  return (
    <>
      <FormTodo />
      <Todos />
    </>
  );
}

export default App;
