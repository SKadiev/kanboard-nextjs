import Link from 'next/link';
import React, { Fragment } from 'react';

const Kanboard = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/kanboard/members">Members</Link>
        </li>
        <li>
          <Link href="/kanboard/projects">Projects</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Kanboard;
