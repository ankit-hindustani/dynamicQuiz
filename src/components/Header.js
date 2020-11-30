import {Navbar, Nav} from 'react-bootstrap/'

export default function Header(){
    return(<>
<Navbar navbar-inverse fixed="top"  collapseOnSelect expand="sm" className="nav-color" variant="dark">
<Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   <Nav className="ml-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link eventKey={2} href="/">Dynamic Quiz</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    )
}