import React from 'react';
import { useReducer } from 'react';
import './main.scss';

function reduce(state, action) {
    switch(action.type){
        case 'Click':
            return {
                ...state,
                inputV: action.payload,
                inputArray: [...state.inputV]
            }
        case 'hover':
            return {
                ...state,
                show: state.show = 'none' ? ('block') : ('none')
            }    
    }
    
}

const list = () => {
    
    const [state, dispatch] = useReducer(reduce, {
        inputV : (""),
        inputArray : [],
        show: 'none'
    })

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({type: 'Click', payload: e.target.value});

    }

    const show = () => {
        dispatch({type: 'hover'})
        console.log(state.show)
    }

    

    return <>
    <div className='all'>
        <div>
            <form>
                <input type='text' placeholder='Qual a sua tarefa??' defaultValue={state.inputV} onChange={handleAdd}></input>
                <button type='submit'>Adicionar!</button>
                <p>{state.inputV}</p>
            </form>
        </div>
        <div onMouseEnter={show} onMouseLeave={show}>
            <h1>Tarefa</h1>
            <h1>Importância</h1>
        </div>
        <div style={{display : state.show}} className='all__table'>
            <ul>
                <li>{state.inputArray}</li>
            </ul>
        </div>
    </div>

    </>;
}

export default list