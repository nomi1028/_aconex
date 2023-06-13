import React, { useState, useEffect } from "react";
// import "../../assets/scss/loginPage.scss";
import { Grid, Card, Typography } from "@mui/material";
import { Form } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { Link, Redirect} from "react-router-dom";
import Logo from "./assets/aetmaadLoginLogo.png";
import AetmaadDemo from "./assets/dashboard3.png";
// import { Api } from "../../utils/Api";
// import Loader from "../../components/Custom/Loader";
// import Toast from "../../components/Custom/Toast";
// import { DeviceUUID } from "device-uuid";
// import { activeUser } from "../../auth/getActiveUser";
import "./loginPage.css";
import Input from "./Input";
import AETButtons from "./AETButton";

// import { getToken } from "../../firebaseInit";

const NewLogin = () => {
  const navigate = useNavigate();
  //   var uuid = new DeviceUUID().get();
  //   const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [tokenFound, setTokenFound] = useState(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };
  useEffect(() => {
    localStorage.clear();
  }, []);

  const login = async (e) => {
    navigate("/home");
    // e.preventDefault();
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (username.length === 0 || password.length < 8) {
    //   setShowToast(true);
    //   setType("Error");
    //   setTitle("Validation Error");
    //   setMessage(
    //     "Username & password is required. Password minimum length is 8 characters."
    //   );
    // } else {
    //   if (re.test(username)) {
    //     showLoader();
    //     const formData = new FormData();
    //     formData.append("email", username);
    //     formData.append("password", password);
    //     formData.append("uuId", uuid);
    //     const response = await Api("post", `auth/login`, formData);
    //     if (response.status === 200) {
    //       localStorage.setItem("aetmaad-auth-token", response.data.token);
    //       let user = activeUser(response.data.token);
    //       if (user?.branch_id != null && user?.dep_id != null) {
    //         const data = new FormData();
    //         data.append("userId", user._id);
    //         data.append("uuid", uuid);
    //         data.append("branchId", user.branch_id?.id);
    //         const res = await Api("post", `auth/mark-attendance`, data);
    //         if (res.status === 200) {
    //         } else {
    //           setErrorTitle("Error");
    //           setErrorMessage(res.data.msg);
    //           setShowErrorToast(true);
    //         }
    //       }
    //       //  const firebaseToken = await getToken(setTokenFound);
    //       //  if (firebaseToken) {
    //       //   console.log(firebaseToken);
    //       //   const formData = new FormData();
    //       //   formData.append("token", firebaseToken);
    //       //   const tokenResp = await Api("post", `auth/update-token`, formData);
    //       //  }
    //       hideLoader();
    //       if (localStorage.getItem("aetmaad-auth-token") && user)
    //         setRedirect(true);
    //     } else {
    //       hideLoader();
    //       setShowToast(true);
    //       setType("Error");
    //       setMessage(response.data.msg);
    //     }
    //   } else {
    //     hideLoader();
    //     setShowToast(true);
    //     setType("Error");
    //     setTitle("Email Validation");
    //     setMessage("Enter a valid email");
    //   }
    // }
  };
  //   const handleForgotPassword = () => history.push("/forgot-password");

  //   if (redirect) return <Redirect to={"/dashboard"} />;

  return (
    <>
      {/* {loading ? <Loader /> : null} */}
      {/* <Toast
        show={showToast}
        title={title}
        message={message}
        type={type}
        hide={setShowToast}
      />
      <Toast
        show={showErrorToast}
        title={errorTitle}
        message={errorMessage}
        type={"Error"}
        hide={setShowErrorToast}
      /> */}
      <div className="login_mainContainer">
        <div className="login_container">
          <Card className="login_card">
            <Grid container>
              <Grid
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    height: "80vh",
                  },
                }}
                md={6}
                className="login_leftGrid"
              >
                <Grid container className="loginGridContainer">
                  <Grid xs={1}></Grid>
                  <Grid xs={10} className="login_leftGridContent">
                    {/* <Link to="/"> */}
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "30px",
                      }}
                    >
                      Lahore Times Square
                    </Typography>
                    {/* </Link> */}
                    <img
                      src={AetmaadDemo}
                      alt="demo"
                      className="logo_aetmaadDemo"
                    />
                    <div className="login_aetmaadDesc">
                      <br />
                    </div>
                  </Grid>
                  <Grid xs={1}></Grid>
                </Grid>
              </Grid>
              <Grid xs={12} md={6} className="login-right-height">
                <Grid container className="login_rightGrid">
                  <Grid xs={1}></Grid>
                  <Grid xs={10} sx={{ height: "80%" }}>
                    <h1 className="login_title">Login</h1>
                    <Form className="loginform" onSubmit={login}>
                      <div>
                        <Input
                          label="Email"
                          required
                          type="email"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <Input
                          showField
                          label="Password"
                          required
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <p
                          className="p-0 m-0 label text-right"
                          style={{ cursor: "pointer", textAlign: "right" }}
                          //   onClick={handleForgotPassword}
                        >
                          Forgot Password?
                        </p>
                        <br />
                        <div className="login_buttonContainer">
                          <AETButtons title="Login" type="submit" />
                        </div>
                      </div>
                    </Form>
                  </Grid>
                  <Grid xs={1}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>{" "}
    </>
  );
};

export default NewLogin;
