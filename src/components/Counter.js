import { useSelector, useDispatch } from 'react-redux';
import './Counter.scss';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const increment5Handler = () => {
    dispatch({type: 'increaseby5', payload: 5});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={"counter"}>
      <h1>Redux Counter</h1>
      { show && <div className={"value"}>{ counter }</div> }
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
