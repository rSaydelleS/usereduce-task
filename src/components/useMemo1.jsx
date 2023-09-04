import React, { useCallback } from 'react'
import { useState, useMemo } from 'react';

const useMemo1 = () => {
    
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [count, setCount] = useState(0)
    const c = useMemo(()=>{
        return text.length
    },[text.length])
// O useMemo está guardando na memória do componente o valor que está em seu return, ele deve sempre receber uma função anômima.
// Assim caso o valor do outro input seja alterado não irá interferir no valor do useMemo.
// O text só vai mudar caso o array de dependência que está atrelado a ele mude, o caso o state text.

const limit = useCallback(()=>{
    return console.log(40 - text.length)
},[text.length])

function add() {
    setCount(count + 1)
}

    return <>
        <div>
            <h1>Hello World</h1>
            <input value={name} onChange={(event) =>setName(event.target.value)}></input>
            <h1>{name}</h1>
            <input value={text} onChange={(event) => setText(event.target.value)}></input>
            <h2>{text}</h2>
            <h2>{c}</h2>
            <button onClick={limit}>Limite de caracteres</button>
            <h1>{count}</h1>
            <button onClick={add}>adicionar</button>
        </div>
    </>;
}

export default useMemo1