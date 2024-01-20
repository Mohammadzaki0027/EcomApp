import {
  Box,
  List,
  ListItem,
  ListItemText,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import navbarlogopng from "../Assets/logonavbar.png";
import SelectLabels from "../MaterialUicomponent/SelectButton";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 100,
        overflow: "hidden",
        boxShadow:
          "0  4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        backgroundColor: "#ffffff",
        height: "80px",
        display: "flex",
        justifyContent: "space-Evenly",
        alignItems: "center",
        margin: "auto",
        "@media screen and (max-width: 600px)": {
          height: "140px",

          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          width: "65%",
          justifyContent: "space-between",
          display: "flex",
          "@media screen and (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <img
          src={navbarlogopng}
          style={{ width: "40px", height: "40px" }}
          alt="logo"
        />
        <SelectLabels />
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{
            width: "60%",
            "@media screen and (max-width: 600px)": {
              width: "60%",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",

          "@media screen and (max-width: 600px)": {
            width: "90%",
            margin: "auto",
            justifyContent: "space-around",
          },
        }}
      >
        <Box sx={{ height: "60px" }}>
          <CiShoppingCart size={30} color={"black"} />
          <Typography variant="h6" fontSize={16} color={"black"}>
            Cart
          </Typography>
        </Box>
        <Box
          sx={{ height: "60px" }}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <CiLogin size={30} color={"black"} />

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <List>
              <ListItem button component={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Profile" />
              </ListItem>
            </List>
          </Popover>

          <Typography variant="h6" fontSize={16} color={"black"}>
            Login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
