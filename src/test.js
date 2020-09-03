import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './action'
export default function Test() {
    //useSelectot 取得 store 的 state
    let counter = useSelector(state => state.conterReducer)
    let dispatch = useDispatch()

    return (
        <>
            <p>Counter:{counter}</p>
            <button onClick={() => { dispatch(increment())}}>+</button>
            <button>-</button>
        </>
    )
}