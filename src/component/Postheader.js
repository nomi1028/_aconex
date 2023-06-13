import { Grid, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Nav from "react-bootstrap/Nav";

import "swiper/css";
import "./postHeader.css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, { Navigation } from "swiper";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// Swiper.use([Navigation]);
import ArticleIcon from "@mui/icons-material/Article";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
const Postheader = () => {
  const navigate = useNavigate();
  const [link, setlink] = useState(1);
  const [swiperLink, setswiperLink] = useState(calculateSlidesPerView());
  function calculateSlidesPerView(sliderLength) {
    const screenWidth = window.innerWidth;
    const lengthOfSlider = sliderLength;
    if (screenWidth <= 450) {
      return window.innerWidth / (32 * lengthOfSlider);
    } else if (screenWidth <= 576) {
      return window.innerWidth / (33 * lengthOfSlider);
    } else if (screenWidth <= 768) {
      return window.innerWidth / (34 * lengthOfSlider);
    } else if (screenWidth <= 992) {
      return window.innerWidth / (35 * lengthOfSlider);
    } else if (screenWidth <= 1200) {
      return window.innerWidth / (36 * lengthOfSlider);
    } else if (screenWidth <= 1500) {
      return window.innerWidth / (37 * lengthOfSlider);
    } else {
      return window.innerWidth / (40 * lengthOfSlider);
    }
  }

  const [indexTitle, setIndex] = useState();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const open = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);
  const authOpen = Boolean(anchorE3);
  const handleClick = (event, value) => {
    if (value == 3) {
      setAnchorE3(event.currentTarget);
    } else {
      setAnchorE2(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorE2(null);
    setAnchorE3(null);
  };

  const array = [
    {
      title: "Tasks",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Models",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ArticleIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },

    {
      title: "Documents",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ArticleIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open3 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open3 ? "true" : undefined}
            onClick={(e) => handleClick(e, 3)}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE3}
            open={open3}
            onClose={handleClose}
            TransitionComponent={Fade}
            // anchorOrigin={{
            //   vertical: "bottom",
            //   horizontal: "right",
            // }}
            // transformOrigin={{
            //   vertical: "top",
            //   horizontal: "right",
            // }}
            // sx={{ marginLeft: "-110px" }}
            className="document-container"
          >
            <Grid container className="" sx={{ marginBottom: "20px" }}>
              <Grid item xs={12} sm={6} md={4} lg={5}>
                <Typography className="dropdown_heading">Search </Typography>
                <Typography
                  className="dropdown_subheading"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Document Register{" "}
                </Typography>
                <Typography className="dropdown_subheading">
                  Drawings
                </Typography>
                <Typography className="dropdown_subheading">
                  Temporary Files
                </Typography>

                <Typography className="dropdown_heading">Actions</Typography>
                <Typography className="dropdown_subheading">
                  Add/Update Documents
                </Typography>
                <Typography className="dropdown_subheading">
                  Add/Update DocumentsAdd/Update Placeholders
                </Typography>
                <Typography className="dropdown_subheading">
                  Bulk Processing
                </Typography>
                <Typography className="dropdown_subheading">
                  View Outstanding Print Requests
                </Typography>
                <Typography className="dropdown_subheading">
                  Specification Reader
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={1}
                lg={1}
                // sx={{ paddingRight: "20px" }}
              ></Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ paddingRight: "15px" }}
              >
                <Typography className="dropdown_headings">
                  My Project's Searches{" "}
                </Typography>
                <Typography className="dropdown_subheadings">
                  Document Export_PDP
                </Typography>

                <Typography className="dropdown_headings">
                  Standard Searches{" "}
                </Typography>
                <Typography className="dropdown_subheadings">
                  Approved
                </Typography>

                <Typography className="dropdown_subheadings">
                  Drawings modified today
                </Typography>
                <Typography className="dropdown_subheadings">
                  Issued for approval
                </Typography>
                <Typography className="dropdown_subheadings">
                  Temporary files uploaded by me today
                </Typography>
              </Grid>

              {/* Add more Grid items as needed */}
            </Grid>
            <Grid container className="footer">
              <Grid item xs={12} sm={12} md={12} lg={3} sx={{}}></Grid>
              <Grid item xs={12} sm={12} md={12} lg={7} sx={{}}>
                <Typography className="footer_heading">
                  Switched to new Improved Search & Upload
                </Typography>
                <Typography className="footer_subheading">
                  Project fields are used in the project, as a result New
                  Improved Search and Upload are enabled for all the project
                  users by default
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={1} lg={1} sx={{}}></Grid>
            </Grid>
          </Menu>
        </div>
      ),
    },
    {
      title: "Mail",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <MailIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            // anchorOrigin={{
            //   vertical: "bottom",
            //   horizontal: "right",
            // }}
            // transformOrigin={{
            //   vertical: "top",
            //   horizontal: "right",
            // }}
            sx={{ marginLeft: "-70px" }}
          >
            <Grid
              container
              className="dropdown_width"
              sx={{ marginBottom: "20px" }}
            >
              <Grid item xs={12} sm={12} md={4} lg={5}>
                <Typography className="dropdown_heading">Search </Typography>
                <Typography className="dropdown_subheading">All </Typography>
                <Typography className="dropdown_subheading">Inbox</Typography>
                <Typography className="dropdown_subheading">Sent</Typography>
                <Typography className="dropdown_subheading">Drafts</Typography>

                <Typography className="dropdown_heading">
                  Create New{" "}
                </Typography>
                <Typography className="dropdown_subheading">
                  Blank Mail{" "}
                </Typography>

                <Typography className="dropdown_heading">Actions</Typography>
                <Typography
                  className="dropdown_subheading"
                  onClick={() => navigate("/about")}
                >
                  Register Incoming Mail{" "}
                </Typography>
                <Typography className="dropdown_subheading">
                  Mail Approvals
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={1}
                lg={1}
                // sx={{ paddingRight: "20px" }}
              ></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ paddingRight: "15px" }}
              >
                <Typography className="dropdown_headings">
                  My Project's Searches{" "}
                </Typography>
                <Typography className="dropdown_subheadings">
                  General Correspondence
                </Typography>
                <Typography className="dropdown_subheadings">
                  Export_PDP
                </Typography>

                <Typography className="dropdown_headings">
                  Standard Searches{" "}
                </Typography>
                <Typography className="dropdown_subheadings">
                  My mail received today
                </Typography>

                <Typography className="dropdown_subheadings">
                  My mail sent today
                </Typography>
                <Typography className="dropdown_subheadings">
                  My Outstanding & Overdue mail{" "}
                </Typography>
                <Typography className="dropdown_subheadings">
                  Org mail not Closed Out
                </Typography>
                <Typography className="dropdown_subheadings">
                  Org mail received in last 30 days
                </Typography>

                <Typography className="dropdown_subheadings">
                  My Outstanding & Overdue mail{" "}
                </Typography>
                <Typography className="dropdown_subheadings">
                  RFIs received report
                </Typography>
              </Grid>

              {/* Add more Grid items as needed */}
            </Grid>
          </Menu>
        </div>
      ),
    },
    {
      title: "Packages",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Cost",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <PaidOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Tenders",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Workflows",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Supplier ",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Directory",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Insights",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
    {
      title: "Setup",
      img: (
        <IconButton
          //   size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FormatListBulletedIcon sx={{ fontSize: "20px", color: "white" }} />
        </IconButton>
      ),
      dropdown: (
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorE2}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              Lahore Time Square
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ width: 250 }}>
              MENA Training
            </MenuItem>
          </Menu> */}
        </div>
      ),
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const linksVeiw = calculateSlidesPerView(array.length - 7.5);
      setswiperLink(linksVeiw);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Typography
      sx={{
        backgroundColor: "#464C68",
      }}
    >
      <Typography>
        {" "}
        <Swiper
          navigation={true}
          slidesPerView={swiperLink}
          spaceBetween={10}
          className="mySwiper"
          freeMode={true}
          cssMode={false}
          modules={[Navigation, FreeMode]}
        >
          {array?.map((data, index) => {
            return (
              <SwiperSlide>
                <SwiperSlide>
                  <Typography
                    sx={
                      indexTitle == index
                        ? {
                            display: "flex",
                            gap: "0",
                            alignItems: "center",
                            borderBottom: "3px solid #F0CC71",
                          }
                        : {
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "3px",
                          }
                    }
                    onMouseOver={() => setIndex(index)}
                    onMouseOut={() => setIndex()}
                  >
                    <span style={{ cursor: "pointer" }}> {data?.img}</span>
                    <span
                      style={{
                        color: "white",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      {data?.title}
                    </span>
                    <span style={{ color: "white", cursor: "pointer" }}>
                      {data?.dropdown}
                    </span>
                  </Typography>
                </SwiperSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Typography>
    </Typography>
  );
};

export default Postheader;
