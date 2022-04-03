import { combineReducers } from "@reduxjs/toolkit";

const listReducer = (list = [], action) => {
    if(action.type === 'LIST_SELECTED') {
        return action.payload;
    }

    return list;
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    list: listReducer,
    selectedSong: selectedSongReducer
})