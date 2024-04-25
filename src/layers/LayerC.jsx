import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFirstBoolean } from "../store/firstSlice";
import { setSecondBoolean } from "../store/secondSlice";

export default function LayerC() {
  const dispatch = useDispatch();
  const firstBoolean = useSelector((state) => state.first.firstBoolean);
  const secondBoolean = useSelector((state) => state.second.secondBoolean);
  const secondNumber = useSelector((state) => state.second.secondNumber);

  const clickHandler = () => {
    dispatch(setFirstBoolean(!firstBoolean));
  };
  const clickHandler2 = () => {
    dispatch(setSecondBoolean(!secondBoolean));
  };

  return (
    <Box sx={{ backgroundColor: "#d0d0d0", padding: "10px", margin: "10px" }}>
      {`Layer 4: `}
      {Math.floor(Math.random() * 101)}
      <div>
        <Button onClick={clickHandler}>{`Update firstSlice's Boolean`}</Button>
      </div>
      <div>
        <Button
          onClick={clickHandler2}
        >{`Update secondSlice's Boolean`}</Button>
      </div>
      <div>
        {`Render firstSlice's Boolean from 4th layer: `}
        {`${firstBoolean}`}
      </div>
      <div>
        {`Render secondSlice's Boolean from 1st layer: `}
        {`${secondBoolean}`}
      </div>
      <div>
        {`Render secondSlice's Number from 1st layer: `}
        {`${secondNumber}`}
      </div>
    </Box>
  );
}
