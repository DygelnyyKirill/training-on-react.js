import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Header from './Header';
import RegistrationForm from './RegistrationForm';
import './App.css';
import Context from './context';
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

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

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="container">
        <Header items={menu} />
          <h1>ToDo List</h1>
          <Modal />
            <React.Suspense fallback={<p>Loading...</p>}>
              <AddTodo onCreate={addTodo}/>
            </React.Suspense>

            {loading && <Loader />}
            {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo}/>
            ) : loading ? null : (
              <p>No todos!</p>
          )}
        <RegistrationForm />  
      </div>
    </Context.Provider>
  );  
}

export default App;