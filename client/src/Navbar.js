import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';


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
      <Navbar.Brand className="ml-5" href="/"><h2><Link className="text-info" to="/">Bteks</Link></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  className="d-md-flex justify-content-md-center">
        <Nav>
          <Link className="mx-3 text-dark" to="/">Home</Link>
          <Link className="mx-3 text-dark" to="/career">Career</Link>
          {/* <Link className="mx-3 text-dark" to="/technology">Technology</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
