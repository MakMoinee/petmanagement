import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex">
        <svg
          className="sidebar-brand-full"
          width="118"
          height="46"
          alt="CoreUI Logo"
        >
          <use xlinkHref="assets/brand/coreui.svg#full"></use>
        </svg>
        <svg
          className="sidebar-brand-narrow"
          width="46"
          height="46"
          alt="CoreUI Logo"
        >
          <use xlinkHref="assets/brand/coreui.svg#signet"></use>
        </svg>
      </div>
      <ul
        className="sidebar-nav"
        data-coreui="navigation"
        data-simplebar="init"
      >
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="https://coreui.io/demos/bootstrap/4.2/free/index.html">
            Dashboard<span className="badge badge-sm bg-info ms-auto">NEW</span>
          </Nav.Link>
          <Nav.Item>
            <span className="nav-title">Theme</span>
          </Nav.Item>
          <Nav.Link href="https://coreui.io/demos/bootstrap/4.2/free/colors.html">
            Colors
          </Nav.Link>
          <Nav.Link href="https://coreui.io/demos/bootstrap/4.2/free/typography.html">
            Typography
          </Nav.Link>
          <Nav.Item>
            <span className="nav-title">Components</span>
          </Nav.Item>
          <NavDropdown title="Base" id="base-dropdown">
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/base/accordion.html">
              Accordion
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/base/breadcrumb.html">
              Breadcrumb
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/base/cards.html">
              Cards
            </NavDropdown.Item>
            {/* Add other NavDropdown items for Base as needed */}
          </NavDropdown>
          <NavDropdown title="Buttons" id="buttons-dropdown">
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/buttons/buttons.html">
              Buttons
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/buttons/button-group.html">
              Buttons Group
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/buttons/dropdowns.html">
              Dropdowns
            </NavDropdown.Item>
            {/* Add other NavDropdown items for Buttons as needed */}
          </NavDropdown>
          <Nav.Link href="https://coreui.io/demos/bootstrap/4.2/free/charts.html">
            Charts
          </Nav.Link>
          <NavDropdown title="Forms" id="forms-dropdown">
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/forms/form-control.html">
              Form Control
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/forms/select.html">
              Select
            </NavDropdown.Item>
            {/* Add other NavDropdown items for Forms as needed */}
          </NavDropdown>
          <NavDropdown title="Icons" id="icons-dropdown">
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/icons/coreui-icons-free.html">
              CoreUI Icons
              <span className="badge badge-sm bg-success ms-auto">Free</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/icons/coreui-icons-brand.html">
              CoreUI Icons - Brand
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/icons/coreui-icons-flag.html">
              CoreUI Icons - Flag
            </NavDropdown.Item>
            {/* Add other NavDropdown items for Icons as needed */}
          </NavDropdown>
          <NavDropdown title="Notifications" id="notifications-dropdown">
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/notifications/alerts.html">
              Alerts
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/notifications/badge.html">
              Badge
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/notifications/modals.html">
              Modals
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coreui.io/demos/bootstrap/4.2/free/notifications/toasts.html">
              Toasts
            </NavDropdown.Item>
            {/* Add other NavDropdown items for Notifications as needed */}
          </NavDropdown>
          <Nav.Link href="https://coreui.io/demos/bootstrap/4.2/free/widgets.html">
            Widgets<span className="badge badge-sm bg-info ms-auto">NEW</span>
          </Nav.Link>
          <Nav.Item>
            <span className="nav-divider"></span>
          </Nav.Item>
          <Nav.Item>
            <span className="nav-title">Extras</span>
          </Nav.Item>
          <NavDropdown title="Pages" id="pages-dropdown">
            <NavDropdown.Item
              href="https://coreui.io/demos/bootstrap/4.2/free/login.html"
              target="_top"
            >
              Login
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://coreui.io/demos/bootstrap/4.2/free/register.html"
              target="_top"
            >
              Register
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://coreui.io/demos/bootstrap/4.2/free/404.html"
              target="_top"
            >
              Error 404
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://coreui.io/demos/bootstrap/4.2/free/500.html"
              target="_top"
            >
              Error 500
            </NavDropdown.Item>
            {/* Add other NavDropdown items for Pages as needed */}
          </NavDropdown>
          <Nav.Link
            href="https://coreui.io/docs/templates/installation/"
            target="_blank"
          >
            Docs
          </Nav.Link>
          <Nav.Link
            className="nav-link nav-link-danger"
            href="https://coreui.io/pro/"
            target="_top"
          >
            Try CoreUI<div className="fw-semibold">PRO</div>
          </Nav.Link>
        </Nav>
      </ul>
      <button
        className="sidebar-toggler"
        type="button"
        data-coreui-toggle="unfoldable"
      ></button>
    </div>
  );
}

export default Sidebar;
