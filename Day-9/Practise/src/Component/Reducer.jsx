 import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type){
       case "increament":
        return {count : state.count + 1 }
        case "decrease":
        return {count : state.count - 1 }
    }  
}


 
const Reducer = () => {
  
   const [state , dispatch] =   useReducer(reducer ,  {
    count: 0,
})


  return (
    <div>
      <h1>Inside the Reducer</h1>
      <p   >Count :{state.count}</p>
      <button   onClick={()=> dispatch({type:"increament"})} >Increase</button>
       <button disabled={state.count<=0} onClick={()=> dispatch({type:"decrease"})} >Decrease</button>
    </div>
  )
}

export default Reducer
