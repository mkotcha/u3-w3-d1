import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <NavLink className="navbar-brand" to="/">
          Fatica2000
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/favourites">
              Favourites
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
