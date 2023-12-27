import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "15%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink",
        position: "sticky",
        top: 120,
        paddingRight: "40px",
        paddingLeft: "2rem",
      }}
    >
      <FormGroup>
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
            sx={{ color: "black" }}
          />
        ))}
      </FormGroup>
      <Button variant="outlined">Show Results</Button>
    </Box>
  );
};

export default SideBar;
