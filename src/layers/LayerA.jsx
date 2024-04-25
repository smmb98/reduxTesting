import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import LayerB from "./LayerB";
import { memo } from "react";

const MemoizedLayerB = memo(LayerB);
export default function LayerA() {
  const firstBoolean = useSelector((state) => state.first.firstBoolean);

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}>
      {`Layer 2: `}
      {Math.floor(Math.random() * 101)}
      <MemoizedLayerB prop={"unchanging value"}></MemoizedLayerB>
      {/* <MemoizedLayerB prop={firstBoolean}></MemoizedLayerB> */}
      <div>
        {`Render firstSlice's Boolean from 4th layer: `}
        {`${firstBoolean}`}
      </div>
    </Box>
  );
}
