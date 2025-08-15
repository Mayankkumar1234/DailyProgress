import React, { useMemo } from 'react'

const Memo = () => {

  let [value , setValue]  = React.useState(0);


     const calculation = (value)=>
      {
        console.log("Expensive Computation is running...");
         for(let i=0; i<100000000000000; i++){}  // Simulating a heavy computation
         return value * 2;
     }
     const expensiveComputation =useMemo(()=>calculation(value), [value]);
    

     
  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)} />
      <h1>Value: {value}</h1>
      <h1>Expensive Computation: {expensiveComputation}</h1>
    </div>
  )
}

export default Memo
