// import logo from "./logo.svg";
// import "./App.css";

import PrimarySearchAppBar from "./component/Header";
import NewLogin from "./component/Login";
import Postheader from "./component/Postheader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./component/mail/Mail";
import DocumentRegister from "./component/document/DocumentRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewLogin />} />
        <Route path="/home" element={<HomeWithAppBar />} />
        <Route path="/about" element={<AboutWithAppBar />} />
        <Route path="/register" element={<ContactWithAppBar />} />
        <Route path="/login" element={<NewLogin />} />
      </Routes>

      {/* <PrimarySearchAppBar />
     
      <NewLogin /> */}
    </>
  );
}
function HomeWithAppBar() {
  return (
    <>
      <PrimarySearchAppBar />
      {/* <Postheader /> */}
    </>
  );
}

function AboutWithAppBar() {
  return (
    <>
      <PrimarySearchAppBar />
      <Mail />
    </>
  );
}

function ContactWithAppBar() {
  return (
    <>
      <PrimarySearchAppBar />
      <DocumentRegister />
    </>
  );
}
export default App;
