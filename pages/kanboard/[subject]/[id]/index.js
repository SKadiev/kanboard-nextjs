import React from 'react';
import { useRouter } from 'next/router';

const subject = () => {
  const router = useRouter();
  const subject = router.query.id;

  return <div>{subject}</div>;
};

export default subject;
