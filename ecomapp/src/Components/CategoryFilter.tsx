import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";

export default function CategoryFilter() {
  const [category, setCategory] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  let categoryObject = [
    { name: "Electronics", value: "Electronics" },
    { name: "Jewellery", value: "Jewellery" },
    { name: "Shoes", value: "Shoes" },
    { name: "Jewellery", value: "Jewellery" },
    { name: "Books", value: "Books" },
    { name: "Clothing", value: "Clothing" },
  ];
  return (
    <Box width={300}>
      <FormControl sx={{ m: 1, }}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>

          {categoryObject?.map((ele) => (
            <MenuItem value={ele.value}>{ele.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
