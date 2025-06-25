import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counter/counterSlice";

const Community = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>the value of count in community is {count}</p>
    </div>
  );
};

export default Community;
