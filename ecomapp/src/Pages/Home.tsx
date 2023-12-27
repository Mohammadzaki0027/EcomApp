import { Box } from "@mui/material";
import SideBar from "../Components/SideBar";
import RightSideBar from "../Components/RightSideBar";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid red",
        backgroundColor: "#f4f4f4",
        paddingTop: "100px",
        margin: "auto",
        display:"flex",

    
        "@media screen and (max-width: 600px)": {
          paddingTop: "150px",
        },
      }}
    >
      <SideBar />
      <RightSideBar />
    </Box>
  );
};

export default Home;
