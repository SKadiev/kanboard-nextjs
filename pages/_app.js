import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link href="/">
            <a class="navbar-brand">Navbar</a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link href="/kanboard">
                <a class="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="/kanboard/members">
                <a class="nav-link">Members</a>
              </Link>
              <Link href="/kanboard/projects">
                <a class="nav-link">Projects</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
