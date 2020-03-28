import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


const Menu = () => {

  // const [isMove, setIsMove] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleMenu)
  // })

  // const handleMenu = (e) => {
  //   e.preventDefault();
  //   let top = window.scrollY;
  //   if(top > 350) {
  //     setIsMove(true);
  //   } else {
  //     setIsMove(false);
  //   }
  // }

  return (
    <Navbar className="navbar" fixed="top" bg="light" variant="light" expand="md">
      <Navbar.Brand className="text-info ml-5" href="#home"><h2>Bteks</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  className="d-md-flex justify-content-md-center">
        <Nav>
          <Nav.Link className="mx-3" href="/">Home</Nav.Link>
          <Nav.Link className="mx-3" href="/career">Career</Nav.Link>
          <Nav.Link className="mx-3" href="/technology">Technology</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
