import Styles from "../Styles/Nav.module.css";
import { Link } from "react-router-dom";
import navbarlogopng from "../Assets/logonavbar.png";
import { Box, Button, IconButton, Input, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CategoryFilter from "./CategoryFilter";
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
        alignItems: "center",
        display: "flex",
        maxwidth: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        border="1px solid red"
        width={1}
        sx={{ "@media (max-width: 600px)": { padding:2} }}
        justifyContent={"space-between"}
        paddingX={10}
        alignItems={"center"}
      >
        <img src={navbarlogopng} className={Styles.logoimage} />
        <Stack
          direction="row"
          spacing={2}
          width={"60%"}
          border={"1px solid teal"}
          alignItems={"center"}
          sx={{ "@media (max-width: 600px)": {width:"50%" } }}
        >
          <CategoryFilter />
          <Box
            sx={{
              width: "100%",
           "@media (max-width: 600px)": {width:"70%" } ,
              height: 50,
              backgroundColor: "#ffffff",
              "&:hover": {
                borderColor: "blue",
              },
              borderRadius: 20,
            }}
          >
            <Input
              placeholder="Search...."
              disableUnderline={true}
              fullWidth
              sx={{
                height: "100%",
                border: "none",
                outline: "none",
                padding: 2,
              }}
            />
          </Box>
          <Button
            variant="outlined"
            endIcon={<Search />}
            color="success"
            sx={{ backgroundColor: "green", color: "white" }}
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
                    display: "none", // Initially hide the text
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
