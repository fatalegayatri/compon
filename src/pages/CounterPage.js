import React, { useReducer } from "react";
import { produce } from "immer";
import Panel from "../components/Panel";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_ADD_VALUE = "addValue to addValue";
const SET_ADD_VALUE_TO_COUNT = "Add value to count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;

      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;

      return;

    case SET_ADD_VALUE:
      state.addValue = action.payload;

      return;
    case SET_ADD_VALUE_TO_COUNT:
      state.count = state.count + state.addValue;

      state.addValue = 0;
      return;

    default:
      return;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    addValue: 0,
  });

  //   const [count, setCount] = useState(initialCount);
  //   const [addValue, setAddValue] = useState(0);
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    dispatch({
      type: SET_ADD_VALUE,
      payload: value,
    });
  };
  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + addValue);
    dispatch({
      type: SET_ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel>
      <h1>Counter {state.count} </h1>
      <div className="flex flex-row gap-1">
        <Button success onClick={handleIncrement}>
          Increment
        </Button>
        <Button warning onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a number</label>
        <input
          type="number"
          className="border-gray-400  w-full"
          onChange={handleChange}
          value={state.addValue || ""}
        />
        <Button primary rounded>
          ADD
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
