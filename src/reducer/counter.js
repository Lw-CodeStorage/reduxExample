
let counter = (state = {text:"未初始化"}, action) => {
    switch (action.type) {
        case 'init':
            return{text:action['text']}
        default:
            return state
    }
}

export default counter