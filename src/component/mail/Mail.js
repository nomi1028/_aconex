import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SearchIcon from "@mui/icons-material/Search";
import "./mail.css";
import TextEditor from "../editor";

export default function Mail() {
  const [data, setData] = React.useState("");
  return (
    <div
      class="mail_page"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f4f2",
        padding: 10,
      }}
    >
      <div class="container" style={{ marginTop: 20 }}>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8">
            <div style={{ backgroundColor: "white" }}>
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group d-flex" style={{ padding: 10 }}>
                  <label
                    class="control-label col-lg-2"
                    style={{ marginLeft: 10, marginRight: 12, fontSize: 15 }}
                    for="type"
                  >
                    Type<span style={{ color: "red" }}> *</span>
                  </label>
                  <div class="col-lg-8">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      className="inputWidthMail"
                      style={{ padding: 2 }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: "white", marginTop: 20 }}>
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group d-flex" style={{ padding: 10 }}>
                  <label
                    class="control-label col-lg-2"
                    style={{ marginLeft: 10, marginRight: 12, fontSize: 15 }}
                    for="type"
                  >
                    <div style={{ display: "flex" }}>
                      <a href="#" style={{ color: "#00688c" }}>
                        Sent Form
                      </a>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                  </label>
                  <div class="col-lg-8">
                    {/* <input type="search" id="gsearch" name="gsearch" style={{ width: '100%'}}/> */}
                    <div class="input-group" style={{ alignItems: "baseline" }}>
                      <input type="text" class="form-control" placeholder="" />
                      <span
                        style={{
                          border: "1px solid lightgray",
                          marginTop: "10px",
                        }}
                      >
                        {/* <div
                          class="input-group-append"
                          style={{ height: "37px" }}
                        >
                          <button class="btn btn-default" type="button">
                            <SearchIcon />
                          </button>
                        </div> */}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-sm"
                      style={{ marginLeft: 5, height: 38 }}
                    >
                      Directory
                    </button>
                  </div>
                </div>
              </form>
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group d-flex" style={{ padding: 10 }}>
                  <label
                    class="control-label col-lg-2"
                    style={{ marginLeft: 10, marginRight: 12, fontSize: 15 }}
                    for="type"
                  >
                    <a href="#" style={{ color: "#00688c" }}>
                      Sent To
                    </a>
                    <span style={{ color: "red" }}> *</span>
                  </label>
                  <div class="col-lg-8">
                    {/* <input type="search" id="gsearch" name="gsearch" style={{ width: '100%'}}/> */}
                    <div class="input-group" style={{ alignItems: "baseline" }}>
                      <input type="text" class="form-control" placeholder="" />
                      <span
                        style={{
                          border: "1px solid lightgray",
                          marginTop: "10px",
                        }}
                      >
                        {/* <div
                          class="input-group-append"
                          style={{ height: "37px" }}
                        >
                          <button class="btn btn-default" type="button">
                            <SearchIcon />
                          </button>
                        </div> */}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-sm"
                      style={{ marginLeft: 5, height: 38 }}
                    >
                      Directory
                    </button>
                  </div>
                </div>
              </form>
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group d-flex" style={{ padding: 10 }}>
                  <label
                    class="control-label col-lg-2"
                    style={{ marginLeft: 10, marginRight: 12, fontSize: 15 }}
                    for="type"
                  >
                    <a href="#" style={{ color: "#00688c" }}>
                      Cc
                    </a>
                    <span style={{ color: "red" }}> *</span>
                  </label>
                  <div class="col-lg-8">
                    {/* <input type="search" id="gsearch" name="gsearch" style={{ width: '100%'}}/> */}
                    <div class="input-group" style={{ alignItems: "baseline" }}>
                      <input type="text" class="form-control" placeholder="" />
                      <span
                        style={{
                          border: "1px solid lightgray",
                          marginTop: "10px",
                        }}
                      >
                        {/* <div
                          class="input-group-append"
                          style={{ height: "37px" }}
                        >
                          <button class="btn btn-default" type="button">
                            <SearchIcon />
                          </button>
                        </div> */}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-sm"
                      style={{ marginLeft: 5, height: 38 }}
                    >
                      Directory
                    </button>
                  </div>
                </div>
              </form>
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group d-flex" style={{ padding: 10 }}>
                  <label
                    class="control-label col-lg-2"
                    style={{ marginLeft: 10, marginRight: 12, fontSize: 15 }}
                    for="type"
                  >
                    Response Required
                  </label>
                  <div class="col-lg-6">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      className="inputWidthMail"
                      style={{ padding: 2 }}
                    >
                      <option> --Select-- </option>
                      <option>Responsed by</option>
                      <option>Approve by</option>
                      <option>Submit comments by</option>
                      <option>Revise and re-submit by</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <input type="date" style={{ marginLeft: 5 }} />
                  </div>
                </div>
              </form>
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group d-flex" style={{ padding: 10 }}>
                  <label
                    class="control-label col-lg-2"
                    style={{ marginLeft: 10, marginRight: 12, fontSize: 15 }}
                    for="type"
                  >
                    Subject<span style={{ color: "red" }}> *</span>
                  </label>
                  <div class="col-lg-8">
                    <input
                      type="search"
                      id="gsearch"
                      name="gsearch"
                      style={{ width: "100%", border: "1px solid lightgray" }}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: "#f5f4f2" }}>
              <div class="row">
                <div class="col-lg-3">
                  <span style={{ padding: 15, fontSize: "18px" }}>Message</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "white" }}>
              <div style={{ padding: 10 }}>
                <div class="row">
                  <div class="col-lg-2">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      className="inputWidthMail"
                    >
                      <option>Select auto text</option>
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <select
                      class="form-select"
                      id="sel1"
                      name="sellist1"
                      className="inputWidthMail"
                    >
                      <option>Select signature</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "white" }}>
              <div class="row">
                <div class="col-lg-12">
                  <TextEditor setData={setData} data={data} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
