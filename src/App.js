import { useReducer } from "react";

// useReducer ---> to manage complex state

// 1st apply simple states
// 2nd step apply complex state

// Useful in learning Redux (State Management Library)

// useState ---> manage state
// useReducer => [] -> length 2 like useState
// 0 index state and 1st index fc to update the state
// return [state, dispatch]

// As an arguement :
// 1. reducer function(1st)
// 2. initialState(2nd)

// dispatch function
// We pass object(action) as an arguement

// dispatch main ACTION OBJECT hota hain

// Note: Function call hote h ACTION DISPATCH hota hain aur wo ACTION check hota hain reducer () function main

// reducer function accepts two things as a parameter
// 1. state
// 2. action

const reducer = (state, action) => {
  if(action.type === "INCREMENT"){// Function call hote h ACTION DISPATCH hota hain aur wo ACTION check hota hain reducer () function main
    return {...state, counter:state.counter + 1}
    // return { counter:state.counter + 1}
  }
  if(action.type === "RESET"){
    return {...state,  counter: 0}// We return also all the previous states using the spread operator if we donot want to get lose of all the pervious states we not current manipulating or changing
    // return { counter: 0}
  }
  if(action.type === "DECREMENT"){
    return {...state, counter:state.counter - 1}
    // return { counter:state.counter - 1}
  }
  return state;
  // Kuch v action match nhi hua to error v return kar skta h ya kuch v return kar skte hain
  // throw new Error("Invalid Action Type Invalid Action Type Invalid Action Type")
}

const initialState = {counter:0, firstName: "dib"}

const App = () => {
  // const [state, setState] = useState({counter:0});
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleIncrease = () => {// Function call hote h ACTION DISPATCH hota hain aur wo ACTION check hota hain reducer () function main
    // setState((prev) => ({...prev, counter: prev.counter + 1}));// object return karne ke liye parenthesis use karna hain
    dispatch({//Whole is the ACTION OBJECT
      type:"INCREMENT",// This is the ACTION TYPE
    });// The object is called ACTION
  }
  const handleReset = () => {
    // setState({counter: 0});
    dispatch({
      type:"RESET",
    });
  }
  const handleDecrease = () => {
    // setState((prev) => ({...prev, counter: prev.counter - 1}));
    dispatch({
      type:"DECREMENT",
    });
  }
  return (
    <div>
      <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Hello {state.firstName}</h2>
      <h2>
        {state.counter}
      </h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App
