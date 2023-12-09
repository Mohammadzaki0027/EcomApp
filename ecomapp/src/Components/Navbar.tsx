import Styles from "../Styles/Nav.module.css";
import { Link } from "react-router-dom";
import navbarlogopng from "../Assets/logonavbar.png";
import { Box, Button, IconButton, Input, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CategoryFilter from "./CategoryFilter";
import { AiFillAudio } from "react-icons/ai";
const Navbar = () => {
  const Linkdata = [
    { name: "Cart", path: "cart" },
    { name: "Account", path: "login" },
  ];
  return (
    <Box
      sx={{
        height: 80,
        backgroundColor: "#c5aa6a",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        className={Styles.navbar_stack_box}
        justifyContent={"space-between"}
        paddingX={2}
        border={"1px solid green"}
        width={"100%"}
      >
        <img src={navbarlogopng} className={Styles.navbar_logo} />
        <Stack
        direction={"row"}
        spacing={2}
          sx={{
        
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid green",
            "@media (max-width: 700px)": {
              width: "100%",
              border: "1px solid red",
            },
          }}
        >
          <CategoryFilter />
          <Stack
            spacing={1}
            direction={"row"}
            border={"1px solid white"}
            borderRadius={20}
            justifyContent={"center"}
            alignItems={"center"}
            width={"60%"}
          >
            <Input
              placeholder="Search...."
              disableUnderline={true}
              sx={{
                height: "100%",
                border: "none",
                outline: "none",
                padding: 2,
                width: { sm: "80%" },
              }}
            />
            <AiFillAudio size={30} color="teal" />
          </Stack>
          <Button
            endIcon={<Search />}
            sx={{
              backgroundColor: "lightblue",
              width: {
                sm: "20%",
                md: "20%",
              },
              fontSize: {
                sm: "small",
              },

              borderRadius: 10,
              padding: 1,
            }}
          >
            Search
          </Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "20%",
            border: "1px solid yellow",
            "@media (max-width: 700px)": {
              display: "none",
            },
          }}
        >
          {Linkdata.map((ele) => (
            <Stack alignItems={"center"} border={"1px solid green"}>
              {ele.name === "Cart" ? (
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  sx={{ position: "relative" }}
                >
                  <AddShoppingCartIcon />
                  <span
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "none",
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    Cart
                  </span>
                </IconButton>
              ) : (
                <Link to={ele.path}>{ele.name}</Link>
              )}
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
