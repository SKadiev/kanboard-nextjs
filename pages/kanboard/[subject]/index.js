import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Link from 'next/link';

const subject = () => {
  const router = useRouter();

  const subject = router.query.subject;

  if (subject === 'members') {
    return (
      <Fragment>
        <div>Members</div>
        <ul>
          <li>
            <Link href="/kanboard/members/tote">
              <a>Tote</a>
            </Link>
          </li>
          <li>
            <Link href="/kanboard/members/koce">
              <a>Koce</a>
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  } else if (subject === 'projects') {
    return (
      <Fragment>
        <div>Projects</div>
        <ul>
          <li>
            <Link href="/kanboard/projects/nodejs">Nodejs</Link>
          </li>
          <li>
            <Link href="/kanboard/projects/react">React</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
  return <div>loading</div>;
};

export default subject;
