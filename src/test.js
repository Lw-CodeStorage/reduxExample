import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './action'
export default function Test() {
    //useSelectot 取得 store 的 state
    let counter = useSelector(state => state.conterReducer)
    let todoReducer = useSelector(state => state.todoReducer)
    //執行action
    let dispatch = useDispatch()
    let inputValue = React.useRef(null)
    React.useEffect(() => {
        //執行 inline action   
        dispatch({ type: 'init', text: "已初始化" })
    }, [])

    React.useEffect(()=>{
        //當dispatch觸發一個Action時，useSelector會得到新的值
        //有點像是監聽了dispatch的動作
        console.log('重整了');
    })

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'todoInit', todoText: inputValue.current })
    }
    function handleInput(e) {
        inputValue.current = e.target.value
    }
    return (
        <>
            {/* <p>Counter:{counter['text']}</p>  */}
            <form onSubmit={handleSubmit}>
                <label>
                    todo:
                 <input type="text" name="name" onChange={handleInput} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {
                todoReducer.map((item) => 
                    <p>{item}</p>
                )
            }
        </>
    )
}