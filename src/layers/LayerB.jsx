import { Box } from "@mui/material";
import LayerC from "./LayerC";


export default function LayerB() {

  return (
    <Box sx={{ backgroundColor: "#e0e0e0", padding: "10px", margin: "10px" }}>
      {`Layer 3: `}
      {Math.floor(Math.random() * 101)}
      <LayerC></LayerC>
    </Box>
  );
}
