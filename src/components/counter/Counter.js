import { useSelector, useDispatch } from 'react-redux';
import './Counter.scss';
import { counterActions } from '../../store/slices/counter/slice';
import { useEffect } from 'react';
//import DemoService from './../../services/demo';
import { fetchProductsData } from './../../store/slices/counter/actions';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const totalProducts = useSelector(state => state.counter.totalProducts);
  const dispatch = useDispatch();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // (async () => {
    //   let response = await DemoService.getAll();
    //   console.log(response);
    // })();
    dispatch(fetchProductsData());
  }, []);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increment5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={"counter"}>
      <h1>Redux Counter - Total Products {totalProducts} </h1>
      {show && <div className={"value"}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div className='toggle'>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
