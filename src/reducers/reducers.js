// Reducer
export function counter(state = { a: 0,b:1 }, action) {
    const a = state.a
    switch (action.type) {
        case 'increase':
            return { a: a + action.num }
        default:
            return state
    }
}
export function counter2(state = { c: 2,d:'测试redux按钮' }, action) {
    const c = state.c
    switch (action.type) {
        case 'increase2':
            return {
                c: c + action.num,
                d:state.d+action.num
            }
        default:
            return state
    }
}