import "./App.css";

import React from "react";
import { Navbar } from "./Components/Navbar";
import { Box } from "@mui/material";
function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        height: "100vh",

        width: "100%",
      }}
    >
      <Navbar />
      <Box
        sx={{ height: "1000px", border: "1px solid red", paddingTop: "70px" }}
      >
      
      </Box>
    </Box>
  );
}

export default App;
