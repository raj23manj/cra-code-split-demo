// import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Counter from './components/counter/Counter';
import { useEffect } from 'react';
import dynamicReducers from './store/slices/dynamic_reducers';
import store from './store/store';
//import { useSelector, useDispatch } from 'react-redux';

function App() {

  // const demoShow = useSelector(state => state.demo.demoCounter);
  // const demostatus = useSelector(state => state.demo.demoStatus);

  useEffect(() => {
    for (const key in dynamicReducers) {
      if (dynamicReducers.hasOwnProperty(key)) {
        const reducer = dynamicReducers[key];
        console.log("key", key);
        console.log("reducer", store);
        store.injectReducer(key, reducer);
      }
    }


    // console.log('demo show', demoShow);
    // console.log('demo staus', demostatus);
  }, [])

  return (
   <div className='app-blue w-96'>
    This is the App Page!!!

     <Route path="/counter">
       <Counter />
     </Route>
     <Route path="/welcome">
       <Welcome />
     </Route>
     <Route path="/products">
       <Products />
     </Route>
   </div>
  );
}

export default App;
