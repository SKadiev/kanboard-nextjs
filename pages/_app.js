import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Link from 'next/link';
import Navigation from '../components/Navigation/Navigation.tsx';

function MyApp({ Component, pageProps }) {
  const [navigationItems, setNavigationItems] = React.useState([
    { title: 'Home', href: '/' },
    { title: 'Members', href: '/kanboard/members' },
    { title: 'Projects', href: '/kanboard/projects' },
  ]);

  return (
    <Fragment>
      <Navigation navTitle="Kanboard" navItems={navigationItems} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
