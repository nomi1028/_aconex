import React from "react";
import "./documentregister.css";

import Select from "react-select";
import SelectComp from "./SelectComp";
// or
import { Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LockResetIcon from "@mui/icons-material/LockReset";
////
import { TextField, InputAdornment, IconButton, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
////
import Checkbox from "@mui/material/Checkbox";
////
// import sidebarMenu from "./sidebarMenu";
import SidebarMenu from "./sidebarMenu";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
///

const useStyles = makeStyles({
  activeItem: {
    borderLeft: "4px solid blue", // Replace 'blue' with your desired color
  },
  searchContainer: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});
const DocumentRegister = () => {
  const classes = useStyles();

  return (
    <>
      <div className="container-Heading">
        <div className="flexDocument">
          <div className="Search-DocumentHeading">Search - Document Register</div>
          <div className="Search-Container">Document Activity</div>
          <div className="Tellthink-title">Tell us what you think</div>
        </div>
      </div>
      <div className="flex-menu-body">
        <SidebarMenu />
        <div style={{ width: "100%" }}>
          <div style={{ padding: "25px" }}>
            <div className="flex-display">
              <TextField
                style={{ marginBottom: "10px" }}
                variant="outlined"
                className="searchContainer"
                placeholder="Search across all document fields including Document Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start" aria-label="search">
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div style={{ display: "flex" }}>
                <div className="search-button"> Search</div>
                <div className="Search-body">Save Search as...</div>
              </div>
              {/* <div className="Clearfilters-title">Clear all filters</div> */}
            </div>
            <Grid container spacing={0} sx={{ marginTop: "15px" }}>
              <Grid item xs={12} sm={6} md={3.5}>
                <div style={{ display: "flex", marginLeft: "-10px", marginTop: "-10px" }}>
                  <Checkbox {...label} size="small" className="colorBlack" />
                  <div className="Checkbox-title">Search file content</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Document No</div>
                  <input className="inputWidth" />
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Discipline</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Created By</div>
                  <input className="inputWidth" />
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Stage</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px", marginBottom: "10px" }}>
                  <div className="Typography-text">Date Type</div>
                  <SelectComp />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3.5}>
                <div style={{ display: "flex", marginLeft: "-10px", marginTop: "-10px" }}>
                  <Checkbox {...label} size="small" />
                  <div className="Checkbox-title">Show my uploads only</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Title</div>
                  <input className="inputWidth" />
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Status</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Plot</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Review Status</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px", marginBottom: "10px" }}>
                  <div className="Typography-text">Date Range</div>
                  <SelectComp />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3.5}>
                <div style={{ display: "flex", marginLeft: "-10px", marginTop: "-10px" }}>
                  <Checkbox
                    {...label}
                    size="small"
                    style={{
                      color: "#000",
                    }}
                  />
                  <div className="Checkbox-title">Show update candidates</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Type</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Revision</div>
                  <input className="inputWidth" />
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div className="Typography-text">Building</div>
                  <div className="select-multi">
                    <Select
                      isClearable={false}
                      isMulti
                      placeholder={"select Values...."}
                      name="colors"
                      options={[
                        { label: "aaaaa", value: "sssss" },
                        { label: "bbbbb", value: "bbbbb" },
                        { label: "ccccc", value: "ccccc" },
                        { label: "dddddd", value: "dddddd" },
                        { label: "fffff", value: "ffff" },
                      ]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <div className="date-query"> + Add Another date query</div>
                </div>
              </Grid>
            </Grid>
            <div className="flexSpace">
              <div style={{ display: "flex" }}>
                <KeyboardArrowRightIcon style={{ color: "gray" }} />
                <div className="MORE-FILTERSTitle"> MORE FILTERS (0)</div>
              </div>
              <div style={{ display: "flex" }}>
                <LockResetIcon />
                <div className="pinned-filtersTitle"> Reset pinned filters</div>
              </div>
            </div>
          </div>
          <div className="bottomFilter-container">
            <div>No results found matching your search criteria.</div>
            <div style={{ marginTop: "10px", marginBottom: "-5px" }}>Suggestions:</div>
            <ul>
              <li>Check your spelling.</li>
              <li>Try different keywords.</li>
              <li>Try different filters.</li>
              <li style={{ color: "#00688c" }}>Add/Update Documents</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentRegister;
