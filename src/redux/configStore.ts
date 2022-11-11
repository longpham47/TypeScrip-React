import  productReducer  from './reducer/productReduce';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        productReducer,
            
    },
  })

  
  // lấy type của state 
  export type RootState = ReturnType<typeof store.getState>
// lấy ype của dispatch
  export type AppDispatch = typeof store.dispatch