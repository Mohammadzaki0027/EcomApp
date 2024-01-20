import { Box, Typography } from "@mui/material";
import React from "react";
import SignIn from "../Components/SignIn";



const Login = () => {
  return (
    <Box
      sx={{
   
       
        width: "100%",
        margin: "auto",
     
      }}
    >
      <SignIn />
    </Box>
  );
};

export default Login;
