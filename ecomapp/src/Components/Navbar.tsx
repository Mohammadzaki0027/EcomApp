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
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        className={Styles.navbar_stack_box}
        justifyContent={"space-between"}
        paddingX={4}
      >
        <img src={navbarlogopng} className={Styles.navbar_logo} />
        <Stack
          direction="row"
          spacing={2}
          className={Styles.navbar_search_stack}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <CategoryFilter />
          <Stack  spacing={1} direction={"row"} border={"1px solid green"} borderRadius={20} justifyContent={"center"} alignItems={"center"} width={"60%"}>
            <Input
              placeholder="Search...."
              disableUnderline={true}
              sx={{
                height: "100%",
                border: "none",
                outline: "none",
                padding: 2,
                width:"70%"
              }}
            />
            <AiFillAudio size={30} color='teal'/>
          </Stack>
          <Button
            variant="outlined"
            endIcon={<Search />}
            color="success"
            className={Styles.search_button}
            sx={{
              backgroundColor: "lightblue",
              width: {
                sm: "10%",
              },
              fontSize: {
                sm: "small",
              },
            }}
          >
            Search
          </Button>
        </Stack>
        {Linkdata.map((ele) => (
          <Stack direction="row" spacing={2} alignItems={"center"}>
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
      </Stack>
    </Box>
  );
};

export default Navbar;
