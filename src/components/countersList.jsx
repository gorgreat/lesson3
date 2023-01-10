import React, {useState} from "react"
import Counter from './counter'

const CountersList = () => {
    
    const initialState = [
        { id: 0, value: 0, name:  'хрень какая то' },
        { id: 1, value: 4, name: 'ложка' },
        { id: 2, value: 0, name: 'тарелка' },
        { id: 3, value: 0, name: 'сапог' },
        { id: 4, value: 1, name: 'кастрюля' }
    ]

    const [counters, setCounters] = useState(initialState)


    const handleDelete = (id) => {
        const newCounters = counters.filter(item => item.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        let result = counters.map((item) => {
            if (item.id === id) {
                item.value = item.value + 1
            }
            return item
        })        
        setCounters(result)
    }

    const handleDecrement = (id) => {
        let result = counters.map((item) => {
            if (item.id === id) {
                item.value = item.value - 1
            }
            return item
        })        
        setCounters(result)
    }

    return <>
        {counters.map((count) => (
            <Counter key={count.id} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} {...count} />
        ))}
        <button className="btn btn-danger m-2" onClick={handleReset}>Сброс</button>
    </>
}

export default CountersList