export function changeColor(color) {
    return {
        type: 'CHANGE_COLOR',
        color: color
    }
}

export function changeTitleColor(titleColor) {
    return {
        type: 'CHANGE_TITLE_COLOR',
        titleColor: titleColor
    }
}