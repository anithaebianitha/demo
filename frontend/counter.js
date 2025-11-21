import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './CounterRedux.css';
import "bootstrap/dist/css/bootstrap.min.css";
const Counter = () => {

const count = useSelector((state) =>
state.counter.count);
const dispatch = useDispatch();

return (
<div className="counter-container">
<h1 className='head'>Counter: {count}</h1>
<div className="counter-buttons">
<button
style={{backgroundColor:"green",color:"white"}}
onClick={() => dispatch({ type:
'INCREMENT',payload:10})}>Increment</button>
<button
style={{backgroundColor:"red",color:"white"}}
onClick={() =>
dispatch({type:'DECREMENT',payload:50})}>Decrem
ent</button>
</div>
</div>
);
};

export default Counter;