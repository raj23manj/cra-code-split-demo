import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Counter.scss';
import { counterActions } from '../../store/slices/counter';
import DemoService from './../../services/demo';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  //const demoShow = useSelector(state => state.demo.demoCounter);
  //const demostatus = useSelector(state => state.demo.demoStatus);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    (async () => {
      let response = await DemoService.getAll();
      console.log(response);
    })();

   // console.log('demo show', demoShow);
   // console.log('demo staus', demostatus);

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
      <h1>Redux Counter</h1>
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
