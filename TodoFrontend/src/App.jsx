import { useState, useEffect } from "react"
import TodoInput from "./Components/TodoInput"
import Todolist from "./Components/Todolist"
import TodoTitle from "./Components/TodoTitle";
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  const API_URL = "http://localhost:5000/";

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL)
      setTodos(res.data)
    } catch (error) {
      console.log("Error fetching Todos " + error)
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  // async function persistData(newList){
  //   localStorage.setItem('todos', JSON.stringify({ todos : newList}))
  // }

  async function handleAddTodos(newTodo) {
    try {
      const res = await axios.post(API_URL, { todo: newTodo });
      const newTodoList = [...todos, res.data]
      setTodos(newTodoList)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteTodo(id) {
    try {
      await axios.delete(`${API_URL}${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log(error);
    }
  }


  async function handleEditTodo(id, updatedValue) {
    try {
      const res = await axios.patch(`${API_URL}${id}`, { todo: updatedValue });
      setTodos(todos.map(t => (t._id === id ? res.data : t)));
    } catch (error) {
      console.log(error);
    }
  }


  const Enter = (e) => {
    if (e.key === 'Enter' && todoValue.trim() != '') {
      handleAddTodos(todoValue)
      setTodoValue('')
    }
  }

  // useEffect(()=>{
  //   if(!localStorage){
  //     return
  //   }
  //   let localTodos = localStorage.getItem('todos')
  //   if(!localTodos){
  //     return
  //   }
  //   localTodos = JSON.parse(localTodos).todos
  //   setTodos(localTodos)
  // },[])

  return (
    <>
      <TodoTitle />
      <TodoInput handleAddTodos={handleAddTodos} Enter={Enter} setTodoValue={setTodoValue} todoValue={todoValue} />
      <Todolist
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />

    </>
  )

}
export default App
