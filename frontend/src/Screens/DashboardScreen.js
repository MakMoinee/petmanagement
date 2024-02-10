import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fetchPetRequest } from "../Services/PetService";

function DashboardScreen({ onLogout }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    sessionStorage.setItem("isLoggedIn", false);
    // onLogout();
    Swal.fire({
      icon: "success",
      title: "Successfully Logout",
      showConfirmButton: false,
      timer: 800,
    });
    onLogout();
    window.location.href = "/";
  };
  const [totalPets, setTotalPets] = useState(0);
  const [pets, setPets] = useState([]);

  const reload = () => {
    fetchPetRequest()
      .then((response) => {
        if (!response.ok) {
          setPets([]);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setPets(data);
        setTotalPets(data.length);
      })
      .catch((error) => {
        setPets([]);
        return;
      });
  };
  useEffect(() => {
    reload();
  }, []);
  return (
    <div>
      <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
        <div className="sidebar-brand d-none d-md-flex">
          <svg
            className="sidebar-brand-full"
            width="118"
            height="46"
            alt="CoreUI
      Logo"
          ></svg>
          <svg
            className="sidebar-brand-narrow"
            width="46"
            height="46"
            alt="CoreUI
      Logo"
          ></svg>
        </div>
        <ul
          className="sidebar-nav"
          data-coreui="navigation"
          data-simplebar="init"
        >
          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: "0px", bottom: "0px" }}
              >
                <div
                  className="simplebar-content-wrapper"
                  tabindex="0"
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    <li className="nav-item">
                      <a className="nav-link active" href="/dashboard">
                        <svg
                          className="nav-icon bi bi-speedometer2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFFFFF"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
                          />
                        </svg>
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-title">Manage</li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#pets"
                        onClick={() => {
                          navigate("/pets");
                        }}
                      >
                        <img
                          className="nav-icon"
                          src="/pets.svg"
                          alt="SVG Example"
                        />
                        Pets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        href="#appointments"
                        onClick={() => {
                          navigate("/appointments");
                        }}
                      >
                        <img
                          className="nav-icon"
                          src="/appointments.svg"
                          alt="SVG Example"
                        />
                        Appointments
                      </a>
                    </li>
                    <li className="nav-title">Settings</li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#logout"
                        onClick={handleLogout}
                      >
                        <img
                          className="nav-icon"
                          src="/logout.svg"
                          alt="SVG Example"
                        />
                        Logout
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: " 256px", height: " 841px" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ width: "0px", display: "none" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: "247px",
                transform: " translate3d(0px, 0px, 0px)",
                display: " block",
              }}
            ></div>
          </div>
        </ul>
        <button
          className="sidebar-toggler"
          type="button"
          data-coreui-toggle="unfoldable"
        ></button>
      </div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <header className="header header-sticky mb-4">
          <div className="container-fluid">
            <button
              className="header-toggler px-md-0 me-md-3"
              type="button"
              onclick="coreui.Sidebar.getInstance(document.querySelector(&#39;#sidebar&#39;)).toggle()"
            >
              <svg className="icon icon-lg">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
              </svg>
            </button>
            <a
              className="header-brand d-md-none"
              href="https://coreui.io/demos/bootstrap/4.2/free/#"
            >
              <svg width="118" height="46" alt="CoreUI Logo">
                <use xlinkHref="assets/brand/coreui.svg#full"></use>
              </svg>
            </a>
            <ul className="header-nav d-none d-md-flex"></ul>
            <ul className="header-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://coreui.io/demos/bootstrap/4.2/free/#"
                >
                  <svg className="icon icon-lg">
                    <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://coreui.io/demos/bootstrap/4.2/free/#"
                >
                  <svg className="icon icon-lg">
                    <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://coreui.io/demos/bootstrap/4.2/free/#"
                >
                  <svg className="icon icon-lg">
                    <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="header-nav ms-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link py-0"
                  data-coreui-toggle="dropdown"
                  href="https://coreui.io/demos/bootstrap/4.2/free/#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-md">
                    <img
                      className="avatar-img"
                      src="/admin.png"
                      alt="user@email.com"
                    />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end pt-0">
                  <a
                    className="dropdown-item"
                    href="#logout"
                    onClick={handleLogout}
                  >
                    <img
                      className="icon me-2"
                      src="/logout2.svg"
                      alt="SVG Example"
                    />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-divider"></div>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb my-0 ms-2">
                <li className="breadcrumb-item">
                  <span>Home</span>
                </li>
                <li className="breadcrumb-item active">
                  <span>Dashboard</span>
                </li>
              </ol>
            </nav>
          </div>
        </header>
        <div className="body flex-grow-1 px-3">
          <div className="container-lg">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-primary">
                  <div
                    className="card-body pb-0 d-flex justify-content-between
                  align-items-start"
                  >
                    <div>
                      <div className="fs-4 fw-semibold">
                        {totalPets}{" "}
                        <span
                          className="fs-6
                        fw-normal"
                        ></span>
                      </div>
                      <div>Pets</div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-transparent text-white p-0"
                        type="button"
                        data-coreui-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg className="icon">
                          <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                        </svg>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a
                          className="dropdown-item"
                          href="https://coreui.io/demos/bootstrap/4.2/free/#"
                        >
                          Action
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://coreui.io/demos/bootstrap/4.2/free/#"
                        >
                          Another action
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://coreui.io/demos/bootstrap/4.2/free/#"
                        >
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="c-chart-wrapper mt-3 mx-3"
                    style={{ height: "70px" }}
                  >
                    <canvas
                      className="chart"
                      id="card-chart1"
                      height="70"
                      width="207"
                      style={{
                        display: "block",
                        boxSizing: "border-box",
                        height: "70px",
                        width: "207px",
                      }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div>
            <a href="/">PetManage</a> © 2024
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DashboardScreen;
