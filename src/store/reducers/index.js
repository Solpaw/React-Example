import { combineReducers } from "@reduxjs/toolkit";

const listReducer = (list = [], action) => {
    if(action.type === 'LIST_SELECTED') {
        return action.payload;
    }

    return list;
}

const timerStarted = (time = null, action) => {
    if(action.type === 'START_TIMER') {
        return action.payload;
    }

    return time;
}

const setOperationLimit = (limit = null, action) => {
    if(action.type === 'SET_OPERATION_LIMIT') {
        return action.payload;
    }

    return limit;
}

const setResults = (results = [], action) => {
    if(action.type === 'SET_RESULTS') {
        return action.payload;
    }
    if(action.type === 'ADD_RESULT') {
        return results.push(action.payload);
    }

    return results;
}

export default combineReducers({
    list: listReducer,
    startTime: timerStarted,
    operationLimit: setOperationLimit,
    results: setResults,
})