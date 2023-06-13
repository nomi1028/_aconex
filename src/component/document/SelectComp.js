import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SelectComp = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <Select
          className="width-dropdown"
          style={{ height: "39px", borderRadius: "5px" }}
          placeholder="Date Modified"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={10}>Date Modified</MenuItem>
          <MenuItem value={20}>Markup Date</MenuItem>
          <MenuItem value={30}>Markup Last Modified Date</MenuItem>
          <MenuItem value={30}>Milestone Date</MenuItem>
          <MenuItem value={30}>Planned Submission Date</MenuItem>
          <MenuItem value={30}>Revision Date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComp;
