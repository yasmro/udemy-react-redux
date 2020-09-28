// reducerでも使うのでconst定義
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    // actionを返す(return)
    type: INCREMENT
})

export const decrement = () => ({
    // actionを返す
    type: DECREMENT
})