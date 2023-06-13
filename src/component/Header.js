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
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Postheader from "./Postheader";
import "./loginPage.css";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
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

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p style={{ margin: "0" }}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate("/login");
          handleCloseAuth();
        }}
        sx={{}}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Log out</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginTop: "0px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant=""
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              mr: 5,
              fontSize: "25px",
              marginTop: "-4px",
            }}
          >
            Lahore Times Square
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontSize: "16px" }}
          >
            Lahore Times Square
          </Typography>
          <div>
            <IconButton
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="dropdownButton"
            >
              <ArrowDropDownIcon sx={{ color: "white", fontSize: "35px" }} />
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
            </Menu>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cross Project Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography>
            <Typography
              //   variant="p"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "16px",
                textAlign: "end",
              }}
            >
              Aconex admin
            </Typography>
            <Typography
              //   variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, fontSize: "12px" }}
            >
              Lahore Times Square Ltd
            </Typography>
          </Typography>
          <IconButton
            id="fade-button"
            aria-controls={authOpen ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={authOpen ? "true" : undefined}
            onClick={handleClickAuth}
            className="dropdownButton"
          >
            <ArrowDropDownIcon
              sx={{ color: "white", fontSize: "35px", marginTop: "-14px" }}
            />
          </IconButton>

          <div>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorE3}
              open={authOpen}
              onClose={handleCloseAuth}
              TransitionComponent={Fade}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ marginTop: "-20px" }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/login");
                  handleCloseAuth();
                }}
                sx={{}}
              >
                Log out
              </MenuItem>
            </Menu>
          </div>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              //   size="large"
              //   aria-label="show 4 new mails"
              color="inherit"
            >
              <HelpOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton
              //   size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsOutlinedIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton
              //   size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Postheader />
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
