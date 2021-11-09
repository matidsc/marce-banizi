import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navState'
export default configureStore({
    
    reducer:{
        
        navState:navReducer
        
    }
})