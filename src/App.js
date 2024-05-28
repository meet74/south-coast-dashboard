import React,{useEffect} from 'react'
import './App.css';
import RouterNav from './routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
   <Provider store={store}>
     <RouterNav/>
   </Provider>
  );
}

export default App;
