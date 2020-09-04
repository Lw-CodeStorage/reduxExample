import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './action'
export default function Test() {
    //useSelectot 取得 store 的 state
    let counter = useSelector(state => state.conterReducer)
    //執行action
    let dispatch = useDispatch()
    React.useEffect(()=>{
        //執行 inline action
         dispatch({type:'sign_in'})
         dispatch({type:'init',text:"已初始化"})
    },[])
    return (
        <>
            <p>Counter:{counter['text']}</p> 
        </>
    )
}