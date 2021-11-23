import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCounterAction, minusCounterAction } from '../store/counterReducer'

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter)

    const addCounter = (count) => {
        dispatch(addCounterAction(count))
    }

    const minusCounter = (count) => {
        dispatch(minusCounterAction(count))
    }

    return (
        <>
            <div>
                <span>{counter}</span>
                <button className="btn btn-primary" onClick={() => addCounter(1)}>+</button>
                &nbsp;
                <button className="btn btn-primary" onClick={() => minusCounter(1)}>-</button>
            </div>

        </>
    )

}

export default Counter;