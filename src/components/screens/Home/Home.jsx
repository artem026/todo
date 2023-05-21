import React, { useState, useEffect } from 'react'
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
{
    _id: 'wefw27',
    title:'Оплатить интернет за Апрель 2023',
    isCompleted: false,
},
{
    _id: 'wefw28',
    title:'Потоковая разработка(Flow)',
    isCompleted: false,
},
]

const yeardate = [-400]

// const today = Date.now();

function daysTill(ddmmyyyy) {
    let dd, mm, yyyy;
    [dd, mm, yyyy] = ddmmyyyy.split('.');
    const Till = new Date(yyyy, mm-1, dd);
    const Now = new Date();
    return Math.floor((Till - Now) / 864e5);
  }
    
const newyear = daysTill("02.07.2023") // 13
const onePeriod = daysTill("02.06.2023")

function daysOut(ddmmyyyy) {
    let dd, mm, yyyy;
    [dd, mm, yyyy] = ddmmyyyy.split('.');
    const Out = new Date(yyyy, mm-1, dd);
    const Now = new Date();
    return Math.floor((Now - Out) / 864e5);
  }

const outDay = daysOut("27.11.2021")
const afterYear = outDay - 365

// получения курса валют
const rates = {};
// const elementUSD = document.querySelector('[data-value="USD"]');
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
// const elementGBP = document.querySelector('[data-value="GBP"]');
// const dollar = [0];

getCurrencies();
// setInterval(getCurrencies, 10000);

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    // console.log(result);

    // console.log(result.Valute.USD.Value)
    // console.log(result.Valute.USD.Previous)

    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    // rates.GBP = result.Valute.GBP;

    console.log(rates)

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    // elementGBP.textContent = rates.USD.Value.toFixed(2);
    console.log(elementUSD)
    console.log(result.Valute.USD.Value)
    // dollar = rates.USD.Value;
    // console.log(dollar)
};

const authors = {};

getAuthors()

async function getAuthors () {
    const response = await fetch('http://127.0.0.1:8000/api/authors');
    const data = await response.json();
    const result = await data;
    console.log(response)
    console.log(data)

    authors = result.data;
};


// function getApi2023 () {
//     const [data2023, setData2023] = useState(null)
    
  
//     useEffect(() => {
//       fetch('http://127.0.0.1:3005/api2023')
//       .then(response => response.json())
//       .then(response => setData2023(response.message))
//     }, [])
// };

// getApi2023();

const Home = () => {
    const [todos, setTodos] = useState(data)
    const [data2023, setData2023] = useState(null)
    const [data2020, setData2020] = useState(null)
    // const [rates2023, setRates2023] = useState(null);

    // useEffect(() => {
    //     fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setRates2023(json.rates2023);
    //             console.log(json.rates2023);
    //         }).catch((err) => {
    //             console.warn(err);
    //             alert('не удалось получить курсы валют');
    //         });
    // }, []);

    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(response => setData2020(response.message))
      }, [])
    console.log(data2020)

    useEffect(() => {
        fetch('/api2023')
        .then(response => response.json())
        .then(response => setData2023(response.message))
      }, [])
    console.log(data2023)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)

    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))

    }



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
            <div className='columns-2 justify-between'>
            <h3 className='new-year-day '>До сдачи дома было {yeardate} дней</h3>
            {/* <h3 className='new-year-day '>Сегодня {today}</h3> */}
            <h3 className='new-year-day '>Дней до конца Мая: {onePeriod}</h3>
            <h3 className='new-year-day '>Дней до конца 2 квартала: {newyear}</h3>
            <h3 className='new-year-day '>Прошло дней: {outDay} (1 год {afterYear} дней)</h3>
            <div className='columns-2 object-right courses'>
                <div>
                    <div>Курс USD</div>
                    <div className='ratesUSD' data-value="USD">--.--</div>
                </div>
                <div>
                    <div>Курс EUR</div>
                    <div className='ratesUSD' data-value="EUR">--.--</div>
                </div>
                {/* <div>
                    <div>Курс GBP</div>
                    <div className='ratesUSD' data-value="GBP">--.--</div>
                </div> */}
            </div>
            </div>
            <h3 className='message'>АПИ {data2023}</h3>
            <p>
                {
                    !data2023 ? "Loading..." : data2023
                }
            </p>
            <p>
                {
                    !data2020 ? "Loading..." : data2020
                }
            </p>

            <h1 className='text-2xl font-bold text-center mb-10'>Весь список задач</h1>
            {/* <h3 className='rates'>курс {rates2023}</h3> */}
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

