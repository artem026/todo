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

const yeardate = [76]


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

    // const [rates, setRates] = React.useState({});

    // React.useEffect(() => {
    //     fetch('https://cdn.cur.su/api/latest.json')
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setRates(json.rates);
    //             console.log(json.rates);
    //         }).catch((err) => {
    //             console.warn(err);
    //             alert('не удалось получить курсы валют');
    //         });
    // }, []);


    return (
        <div className='text-white w-4/5 mx-auto'>
            <h3 className='new-year-day '>До сдачи дома осталось {yeardate} дней</h3>
            <h1 className='text-2xl font-bold text-center mb-10'>Весь список задач</h1>
            {/* <h3 className='rates'>курс {rates}</h3> */}
            {/* <Block /> */}
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

