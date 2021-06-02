import React, { Component } from 'react';
import TodoList from './Todo/TodoList';
import Header from './Header';
import RegistrationForm from './RegistrationForm';
import './App.css';
import Context from './context'

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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="container">
        <Header items={menu} />
          <h1>ToDo List</h1>
          {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo}/>
          ) : (
            <p>No todos!</p>
          )}
        <RegistrationForm />  
      </div>
    </Context.Provider>
  );  
}

export default App;