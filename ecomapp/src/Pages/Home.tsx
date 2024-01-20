import { Box } from "@mui/material";
import SideBar from "../Components/SideBar";
import RightSideBar from "../Components/RightSideBar";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",

        backgroundColor: "#f4f4f4",

        margin: "auto",
        display:"flex",

    
      
      }}
    >
      <SideBar />
      <RightSideBar />
    </Box>
  );
};

export default Home;
