import { IconButton, Typography } from "@mui/material";
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

import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, { Navigation } from "swiper";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// Swiper.use([Navigation]);
import ArticleIcon from "@mui/icons-material/Article";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
const Postheader = () => {
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
  const authOpen = Boolean(anchorE3);
  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE2(null);
  };
  const handleClickAuth = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseAuth = () => {
    setAnchorE3(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
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
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
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
