import React from "react";
import logo from "../../assets/images/logo-default-428x112.png";

const Topnavbar = () => {
  return (
    <>
      <nav
        className="navbar shadow sticky-top d-none d-lg-flex"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center m-2">
          <div>
            {/* Logo and icons visible for lg screens and up */}
            <div className="d-none d-lg-flex align-items-center">
              <a className="brand" href="index.html">
                <img
                  className="brand-logo-dark"
                  src={logo}
                  alt=""
                  width="214"
                  height="56"
                />
              </a>
            </div>
          </div>

          <div className="d-none d-lg-flex">
            {/* Menu items visible for lg screens and up */}
            <ul
              className="list-unstyled d-flex justify-content-around align-items-center mb-0"
              style={{ gap: "60px" }}
            >
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"#0C1451"}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  style={{color:"#0C1451"}}>
                  Gift Vouchers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  style={{color:"#0C1451"}}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"style={{color:"#0C1451"}} >
                  Massage
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"#0C1451"}}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-flex btn-wrap">
            <button
              type="button"
              className="btn btn-lg shadow-lg text-white text-center"
              style={{
                backgroundColor: "#FE9B8E",
                padding: "11px 20px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Get A Massage
            </button>
          </div>
        </div>
      </nav>

      {/* Icons for below lg screens */}
      <nav
        className="z-1 d-lg-none navbar sticky-top"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center m-2">
          <div>
            {/* <svg style={{ width:"30px", height:"30px" }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0c1451" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> */}
            <svg
              style={{ width: "30px", height: "30px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#0c1451"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft"
              aria-controls="offcanvasLeft"
            >
              {" "}
              <svg
                style={{ width: "30px", height: "30px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#0c1451"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>

            <a className="brand" href="index.html">
              <img
                className="brand-logo-dark"
                src={logo}
                alt=""
                width="214"
                height="56"
              />
            </a>
          </div>
        </div>
      </nav>
      <div
        style={{ maxWidth: "40%" }}
        className="z-0 offcanvas offcanvas-start "
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeftLabel"
      >
        <div className=" offcanvas-header">sidebar</div>
        <div className=" offcanvas-body mt-3 d-flex justify-content-start position-relative ">
          <ul
            className="list-unstyled d-flex flex-column justify-content-start align-items-start position-absolute "
            style={{ gap: "40px", top: "50px", left: "30px" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#2A3166" }}>
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link position-relative"
                href="#"
                style={{
                  color: "#2A3166",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                Gift Vouchers
              </a>
              <svg
                style={{
                  width: "12px",
                  height: "12px",
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: "5px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#2a3166"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
              <svg
                style={{
                  width: "12px",
                  height: "12px",
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: "5px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#2a3166"
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
              </svg>
              <ul
                className="list-unstyled d-flex flex-column justify-content-start align-items-start position-absolute"
                style={{
                  marginTop: "40px",
                  gap: "40px",
                  top: "90px",
                  left: "50px",
                }}
              >
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "#2A3166" }}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "#2A3166" }}>
                    Massage
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item  ">
              <a
                className="nav-link"
                href="#"
                style={{ color: "#2A3166", marginTop: "130px" }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#2A3166" }}>
                Massage
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#2A3166" }}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Topnavbar;
