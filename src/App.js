// import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Counter from './components/Counter';

function App() {
  return (
   <div className='app-blue w-96'>
    This is the App Page!!!
    {/* <Route path="/counter-mod">
     <CounterMod />
     </Route> */}
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
