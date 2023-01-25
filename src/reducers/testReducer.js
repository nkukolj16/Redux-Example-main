export default function testReducer(state = { areaColor: 'white', titleColor: 'black' }, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            if (action.color) {
                return {
                    ...state, areaColor: action.color
                }
            }

            return state

            case 'CHANGE_TITLE_COLOR':
                if (action.titleColor) {
                    return {
                        ...state, titleColor: action.titleColor
                    }
                }

            return state
        
        default:
            return state
    }
}