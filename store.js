import {configureStore} from '@reduxjs/toolkit';
import { counterReuducer } from './components/screens/Counter/CounterSlice';

const store = configureStore({
  reducer: {
    counter: counterReuducer,
  }
});
export default store;
