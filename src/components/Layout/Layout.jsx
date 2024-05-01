import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar expand="lg" className="bg-success-subtle">
                <Container>
                    <Navbar.Brand href="/">La Natural</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/search">Buscar</Nav.Link>
                        <Nav.Link href="/carrito">Carrito</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
        </>
    )
}

export default Layout;