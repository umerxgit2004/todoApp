import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todoSlice"
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatach = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatach(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}>
      <input type = 'text' className="bg-slate-400" placeholder="Enter new todo"
      value = {input}
      onChange={(e)=> setInput(e.target.value)}/>
    </form>
  )
}

export default AddTodo
