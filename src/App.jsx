/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import LayerA from "./layers/LayerA";
import { setSecondNumber } from "./store/secondSlice";
function App() {
  const dispatch = useDispatch();

  const secondBoolean = useSelector((state) => state.second.secondBoolean);
  // const { secondBoolean } = useSelector((state) => state.second);

  const clickHandler = () => {
    dispatch((dispatch, getState) => {
      const prevState = getState().second.secondNumber;
      const newValue = prevState + 1;
      dispatch(setSecondNumber(newValue));
    });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid",
        p: 2,
      }}
    >
      {`Layer 1: `}
      {Math.floor(Math.random() * 101)}
      <div>
        <Button
          onClick={clickHandler}
        >{`Update secondSlice's Number at Layer 4`}</Button>
      </div>
      <LayerA></LayerA>

      <div>
        {`Render secondSlice's Boolean from 4th layer: `}
        {`${secondBoolean}`}
      </div>
    </Box>
  );
}
export default App;
