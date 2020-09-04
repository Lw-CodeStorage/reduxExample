 let todoReducer = (state = [], action)=>{
    switch (action.type){
        case 'sign_in' :
            return true
        default:
            return false
    }
}
export default todoReducer