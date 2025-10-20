import { useState } from "react"

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue, Enter} = props
     
    return (
        <><header>
                <input value={todoValue} onKeyDown={Enter} onChange={(e) => {
                    setTodoValue(e.target.value)
                }} 
                placeholder="Enter todo..." />
                <button onClick={() => {
                    handleAddTodos(todoValue)
                    setTodoValue('')}}>Add</button>
            </header>
        </>
    )
}
