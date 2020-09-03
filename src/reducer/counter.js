
let counter = (state = [], action) => {
    switch (action.type) {
        case 'init':
            return[...state,{id:action.id}]
        default:
            return state
    }
}

export default counter