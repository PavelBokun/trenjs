
import { configureStore } from '@reduxjs/toolkit';
import userSlise from './features/userSlise';
 const store=configureStore({
    reducer:{
        user: userSlise
    }
})

export default store;
