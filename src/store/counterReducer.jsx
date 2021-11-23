const defaultState = {
    counter: 1
}

export const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_COUNTER":
            return { ...state, counter: state.counter + action.payload }

        case "MINUS_COUNTER":
            return { ...state, counter: state.counter - action.payload }

        default:
            return state;
    }
}

export const addCounterAction = payload => ({ type: "ADD_COUNTER", payload })
export const minusCounterAction = payload => ({ type: "MINUS_COUNTER", payload })