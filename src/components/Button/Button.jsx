import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 10;
    case "decrease":
      if (state === 150) {
        return state;
      } else {
        return state - 10;
      }
    default:
      return state;
  }
};


function Button() {
  const [width, dispatch] = useReducer(reducer, 500);
  // const increaseWidth = () => dispatch({ type: "increase" });
  const decreaseWidth = () => dispatch({ type: "decrease" });

  return (
    <div>
      <h1>Click the button to see it grow or shrink</h1>
      <button style={{ width }} onClick={decreaseWidth}>
        I Do Something
      </button>
    </div>
  )
}

export default Button
