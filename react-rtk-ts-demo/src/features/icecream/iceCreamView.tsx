import React from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const numberOfIceCreams = useAppSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useAppDispatch();
  const [value,setValue] = useState(1);
  return (
    <div>
      <h2>Number of iceCream: {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order iceCream</button>
      <button onClick={() => dispatch(restocked(value))}>
        Restock iceCream
      </button>
      <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))}/>
    </div>
  );
};
