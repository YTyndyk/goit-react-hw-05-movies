import React from 'react';
import { Link, Header, List } from './Layout.styled';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
