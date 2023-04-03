import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Media, Row, Col, Container } from 'reactstrap';

import { AiOutlineCopyright } from 'react-icons/ai';

import MyPlaceHolderPicture from '../images/lynx.png';
var imgStyle = {
  maxWidth: "85px",
};

export default function HeaderApp(){
  return(
    <Container>
      <Row>
        <Col>
          <Navbar color="primary" light expand="md">
            <NavbarBrand><h4 className="text-white">Bienvenidos</h4></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://twitter.com/FonsoLoaiza" target="_blank">
                  <span className="text-white">Blog Germán Loaiza<AiOutlineCopyright /></span><Media style={imgStyle} object src={MyPlaceHolderPicture} alt="Desarrollo web MERN" /></NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
