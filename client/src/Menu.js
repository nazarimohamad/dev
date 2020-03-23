import React, { useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


const Menu = () => {

  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleMenu)
  })

  const handleMenu = (e) => {
    e.preventDefault();
    let top = window.scrollY;
    if(top > 350) {
      setIsMove(true);
    } else {
      setIsMove(false);
    }
  }

  return (
    <Navbar fixed="top" bg={isMove ? "light" : "transparent"} variant={isMove ? "light" : "dark"} expand="md">
      <Navbar.Brand className="text-info ml-5" href="#home"><h2>Bteks</h2></Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  className="d-md-flex justify-content-md-center">
        <Nav>
          <Nav.Link className="mx-3" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-3" href="#link">Link</Nav.Link>
          <NavDropdown className="mx-3" title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

export default Menu;
