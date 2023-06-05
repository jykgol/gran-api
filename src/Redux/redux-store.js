import { configureStore } from '@reduxjs/toolkit';
import Left_side_State_Reducer from './Left_side_State_Reducer'


let store = configureStore({
    reducer: {
        Left_side_State: Left_side_State_Reducer,
    }
});

window.store = store;

export default store;