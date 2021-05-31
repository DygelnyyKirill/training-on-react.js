import React, { Component } from 'react';
import TodoList from './Todo/TodoList';
import Header from './Header';
import RegistrationForm from './RegistrationForm';


function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Go to work'},
    {id: 2, completed: true, title: 'Go to park'},
    {id: 3, completed: false, title: 'Go to the cinima'},
  ]);

  const menu = [
    {
      link: '/articles',
      label: 'Articles'
    },
    {
      link: '/contacts',
      label: 'Contacts'
    },
    {
      link: '/posts',
      label: 'Posts'
    }
  ];

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
  <div className="wrapper">
    <Header items={menu} />
    <h1>React tutorial</h1>
    <TodoList todos={todos} onToggle={toggleTodo}/>
    <RegistrationForm />  
  </div>
  );  
}

export default App;