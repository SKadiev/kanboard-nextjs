import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';

const Navigation = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link href="/">
          <Navbar.Brand>{props.navTitle}</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          {props.navItems.map((el) => (
            <Link key={el.title} href={el.href}>
              <a style={{ color: 'white' }}>{el.title}</a>
            </Link>
          ))}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
