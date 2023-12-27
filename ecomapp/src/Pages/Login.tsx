import { Box, Typography } from "@mui/material";
import React from "react";
import SignIn from "../Components/SignIn";

const Login = () => {
  return (
    <Box
      sx={{
        paddingTop: "120px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
        margin: "auto",
        border: "1px solid red",
      }}
    >
      <SignIn />
    </Box>
  );
};

export default Login;
