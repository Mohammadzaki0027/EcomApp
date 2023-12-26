import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";

export default function SelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
   
    setAge(event.target.value);
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
    <Box>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="age"
          onChange={handleChange}
        >
          <MenuItem value={age}>
            <em>None</em>
          </MenuItem>
          {categoryObject.map((ele:{name:string,value:string}) => {
            return <MenuItem value={ele.value}>{ele.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
