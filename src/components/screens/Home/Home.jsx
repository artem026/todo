import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
{
    _id: 'wefw23',
    title:'Finish the essay coloboration',
    isCompleted: false,
},
{
    _id: 'wefw24',
    title:'Read next chapter of the book',
    isCompleted: false,
},
{
    _id: 'wefw25',
    title:'Send the finished assigment',
    isCompleted: false,
},
]


const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)

    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))

    }

    const addTodo = title => {
        setTodos([
            ...todos,
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
        ])
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todo sim</h1>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
            <CreateTodoField addTodo={addTodo}/>
        </div>
    )

}

export default Home

// export default function Home() {
//     return (
//       <div>
//         Home
//       </div>
//     )
//   }

