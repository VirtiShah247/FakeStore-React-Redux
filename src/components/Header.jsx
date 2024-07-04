import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { handleLogout } from '../action';


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.authReducer.isAuth);
  const cartState = useSelector(state => state.cartReducer.cart);
  const totalProductInCart = useSelector(state => state.cartReducer.totalCartProduct);
  console.log("Cart state is ", cartState);
  console.log("Auth is ", auth);

  const logout = () => {
    dispatch(handleLogout());
    navigate('/login');
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">FakeStore Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          {
            auth ?
            <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item onClick = {logout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown> :

              <Nav.Link as = {Link} to='login'  eventKey={1} style={{ color: "#fff" }}>
                <Button>Login</Button>
              </Nav.Link>

          }
          <Nav.Link as = {Link} to='cart' eventKey={2}>
            <Button>Cart <span className='fw-bold'>{totalProductInCart}</span></Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}