import React, {useReducer} from 'react';
import reducer, {initalState} from './reducers/calcReducer';
import {addAction, subtractAction, addToMemoryAction, clearAction} from './actions/calcActions'
import './styles.css';


export default function app() {
  const[state,dispatch] = useReducer(reducer, initialState)
}
 const handleCLick = () => {
   dispatch(addAction(10))
 }

 const handleCLick = () => {
   dispatch(subtractAction(20))
 }

 const handleCLick = () => {
   dispatch(clearAction())
 }

//  console.log(state)
//  return(
//    <div className='App'
//      <textarea rows= '1' value={state.currentValue} id='total'name='answer'></textaew></textarea>
//  <button type ='button' onCLick=(handleCLick) className='btn'>
//    +4
//    </button>
//    button type='buton'
 
 


 
export default App;
