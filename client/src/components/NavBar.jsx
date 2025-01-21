import { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { logout } from "../managers/authManager";

export default function NavBar({ loggedInUser, setLoggedInUser }) {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <div>
      <Navbar className="" color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
          Bestiary
        </NavbarBrand>
        {loggedInUser ? (
          <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
              <Nav navbar>
                <NavItem className="mx-4">
                  <NavLink tag={RRNavLink} to="/">
                    Home
                  </NavLink>
                </NavItem>


                  <NavItem className="mx-4">
                    <NavLink tag={RRNavLink} to="/enemy-list">
                      Enemies
                    </NavLink>
                  </NavItem>
                {/* {loggedInUser.roles.includes("Admin") && (
                  <NavItem className="mx-4">
                    <NavLink tag={RRNavLink} to="/enemy-list">
                      Enemies
                    </NavLink>
                  </NavItem>
                )} */}

                  <NavLink  className="mx-4" tag={RRNavLink} to="/create-enemy">
                    Create Enemy
                  </NavLink>
              </Nav>
            </Collapse>
            <Button
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
            </Button>
          </>
        ) : (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login">
                <Button color="primary">Login</Button>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}
