import "./App.css";


import { Navbar } from "./Components/Navbar";
import { Box } from "@mui/material";

import PagesRoutes from "./Routes/PagesRoutes";
function App() {

  

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f4f4f4",
        width: "100%",
      }}
    >
      <Navbar />
      <Box
        sx={{
          paddingTop: "100px",
          backgroundColor: "#f4f4f4",
          "@media screen and (max-width: 600px)": {
            paddingTop: "140px",
          },
        }}
      >
        <PagesRoutes />
      </Box>
    </Box>
  );
}

export default App;
