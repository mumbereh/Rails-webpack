import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "./greetings/greetingsSlice"; 

const Greetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting.randomGreeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Greetings</h1>
      <div>{randomGreeting}</div>
    </div>
  );
};

export default Greetings;
