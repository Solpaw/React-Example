export const selectList = list => {
    return {
        type: 'LIST_SELECTED',
        payload: list
    };
}

export const startTimer = time => {
    return {
        type: 'START_TIMER',
        payload: time
    };
}

export const setOperationLimit = limit => {
    return {
        type: 'SET_OPERATION_LIMIT',
        payload: limit
    };
}

export const setResults = results => {
    return {
        type: 'SET_RESULTS',
        payload: results
    };
}

export const addResult = result => {
    return {
        type: 'ADD_RESULT',
        payload: result
    };
}