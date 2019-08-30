import React, {useState} from 'react';

export default (props) => {

    const [ counter, setCounter ] = useState(0);

    const inCreaseCounter = () => {
        setCounter(counter +1)
    };

    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={inCreaseCounter} type='button'>
                Add + 1
            </button>
        </div>
    )
}