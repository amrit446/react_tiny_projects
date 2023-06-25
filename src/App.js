import * as React from 'react';
import {useState} from 'react';

export default function App() {
   const [count, setCount] =useState(0);

  function inc(){
     setCount(count+1)
  }

    function dec(){
     setCount(count-1)
  }

  return (
    <div>
     <h1>Hi React</h1>
     <h2>{count}</h2>
     <button onClick={inc}>+</button>
     <button onClick={dec}>-</button>
    </div>
  );

}
