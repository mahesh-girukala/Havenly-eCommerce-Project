import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HavenlyBreadcrumb from "./breadcrumb";

function NavScrollExample() {
  let mainMenu = ['Home', 'Women', 'Men', 'Kids', 'Brands'];
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Nav
              className="my-lg-0 text-uppercase"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">{mainMenu[0]}</Nav.Link>
              <Nav.Link href="#">{mainMenu[1]}</Nav.Link>
              <Nav.Link href="#">{mainMenu[2]}</Nav.Link>
              <Nav.Link href="#">{mainMenu[3]}</Nav.Link>
            </Nav>

            <Navbar.Brand href="#" className="text-uppercase">
              Havenly
            </Navbar.Brand>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3 mb-1"> 
         <HavenlyBreadcrumb name='some' /> 
      </Container>
    </>
  );
}

export default NavScrollExample;
