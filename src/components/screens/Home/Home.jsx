import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
{
    _id: 'wefw23',
    title:'Оплатить налоги',
    isCompleted: false,
},
{
    _id: 'wefw24',
    title:'Заменить датчик положения коленвала',
    isCompleted: false,
},
{
    _id: 'wefw25',
    title:'Продлить страховку ДОМ.РФ',
    isCompleted: false,
},
{
    _id: 'wefw26',
    title:'Показания счетчиков 18-23 число месяца',
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


    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todo sim</h1>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
            <CreateTodoField setTodos={setTodos}/>
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

