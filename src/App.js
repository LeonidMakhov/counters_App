import {useState} from "react";

const initialCounters = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40}
]

function App() {
    const [counters, setCounters] = useState(initialCounters)
    const addCounter = () => {
        const newCounters = [...counters, {
            id: Math.random(),
            value: Math.floor(Math.random() * 100)
        }];
        setCounters(newCounters)
    }
    const clickMinus = (id) => {
        const updatedCounters = counters.map(el => el.id === id ?
            ({...el, value: el.value - 1}) : el)
        setCounters(updatedCounters)
    };
    const clickPlus = (id) => {
        const updatedCounters = counters.map(el => el.id === id ?
            ({...el, value: el.value + 1}) : el)
        setCounters(updatedCounters)
    }; //<button disabled = {el.value === 0}> Dis </button>
    const deleteCounter = (id) => {
        const updatedCounters = counters.filter(el => el.id !== id);
        setCounters(updatedCounters)
    };
    const reset = (id) => {
        const updatedCounters = counters.map(el => el.id === id ?
            ({...el, value: el.value = 0}) : el);
        setCounters(updatedCounters)
    };

    return (
        <div>
            <el> COUNTERS! </el>
            {counters.map(el => (
                <div key={el.id}>
                    <button onClick={() => clickMinus(el.id)}> Minus</button>
                    {el.value}
                    <button onClick={() => clickPlus(el.id)}> Plus</button>
                    <button onClick={() => reset(el.id)}> Reset </button>
                    <button onClick={() => deleteCounter(el.id)}> Delete</button>
                </div>
            ))}
            <button onClick={addCounter}> Add Counter</button>

        </div>
    );
}

export default App;