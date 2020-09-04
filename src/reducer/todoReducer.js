 //es6的預設值是說 如果有傳就用傳的值 沒有的話就用預設的
 let todoReducer = (state = [], action)=>{
    switch (action.type){
        case 'todoInit' :
            return [...state,action['todoText']]
        default:
            return state
    }
}
export default todoReducer