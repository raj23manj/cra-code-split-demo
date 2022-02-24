// import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
   <div className='app-blue w-96'>
    This is the App Page!!!
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
