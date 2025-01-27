import { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { logout } from "../managers/authManager";
import "./NavBar.css"

export default function NavBar({ loggedInUser, setLoggedInUser }) {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <div>
      <Navbar color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
        </NavbarBrand>
        {loggedInUser ? (
          <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
              <Nav navbar>
                <NavItem className="mx-4">
                  <NavLink className="nav-link" tag={RRNavLink} to="/">
                    Home
                  </NavLink>
                </NavItem>

                <NavItem className="mx-4">
                  <NavLink tag={RRNavLink} to="/enemy-list">
                    Enemies
                  </NavLink>
                </NavItem>

                  <NavItem>
                    <NavLink  className="mx-4" tag={RRNavLink} to="/create-enemy">
                      Create Enemy
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className="mx-4" tag={RRNavLink} to="/myprofile">
                      My Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className="mx-4" tag={RRNavLink} to="/testing">
                      Testing
                    </NavLink>
                  </NavItem>
                
                {loggedInUser.roles.includes("Admin") && (
                  <NavItem className="mx-4">
                    <NavLink tag={RRNavLink} to="/admin">
                      Admin
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
            <button
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                logout().then(() => {
                  setLoggedInUser(null);
                  setOpen(false);
                });
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login">
                <button color="primary">Login</button>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}
