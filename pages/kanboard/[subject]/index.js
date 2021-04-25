import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Link from 'next/link';

const subject = () => {
  const router = useRouter();

  const subject = router.query.subject;

  let output = subject ? (
    <Fragment>
      <div>{subject.toUpperCase()}</div>
      <ul>
        <li>
          <Link
            href={{
              pathname: `/kanboard/${subject}/[id]`,
              query: { id: '1' },
            }}
          >
            1
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: `/kanboard/${subject}/[id]`,
              query: { id: '2' },
            }}
          >
            2
          </Link>
        </li>
      </ul>
    </Fragment>
  ) : null;

  return output;
};

export default subject;
