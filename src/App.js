import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber , decNumber } from "./actions/index"
const App = () => {
  const myState = useSelector((state)=>{
    return state.changeTheNumber
  });
  const dispatch = useDispatch();
  return (
    <>
      <h2>Welcome to redux</h2>
      <div>
        <button className='quantity_minus' onClick={()=>{
          dispatch(decNumber())
        }}>-</button>
        <input name='quantity' type="text" className='quantity_input' value={myState} />
        <button className='quantity_plus' onClick={()=>{
          dispatch(incNumber())
        }}>+</button>
      </div>
    </>
  )
}

export default App