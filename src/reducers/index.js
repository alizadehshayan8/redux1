import { combineReducers } from "redux";



const songsReducer = () => {
    return [
        {
            title: "Hello (Adele)", duration: "4:30"
        },
        {
            title: "Ghasam (Sogand)", duration: "3:45"
        },
        {
            title: "Didi (Mehrdad)", duration: "4:15"
        },
        {
            title: "Neghab (Ali)", duration: "2:30"
        },

    ];
};


const selectedSongReducer = (selectedSong=null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};


export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});