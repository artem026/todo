import React from 'react'
import TodoItem from './item/TodoItem'

const todos = [
{
    _id: 'wefw23',
    title:'Finish the essay coloboration',
    isComplited: false,
},
{
    _id: 'wefw24',
    title:'Read next chapter of the book',
    isComplited: false,
},
{
    _id: 'wefw25',
    title:'Send the finished assigment',
    isComplited: false,
},
]


const Home = () => {
    return (
        <div className='bg-gray-900 h-screen text-white'>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
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

