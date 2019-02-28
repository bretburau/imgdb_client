import React from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';


    const TopNav = () => {
        return (
            <div>
              <Navbar color="success" dark expand="md">
                <NavbarBrand href="/">Image Organizer</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/upload/">Upload</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/tags">Tags</NavLink>
                    </NavItem>
                  </Nav>
              </Navbar>
            </div>
        );
    }

    export default TopNav;