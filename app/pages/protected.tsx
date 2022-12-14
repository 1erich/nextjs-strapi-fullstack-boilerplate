
import { getSession } from 'next-auth/react';
import Link from 'next/link';

export default function Protected() {
  return (
    <div>
      <h1 className="text-5xl">Protected Page</h1>
      <Link href="/">
        <button>Back to home page</button>
      </Link>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: true,
      },
    };
  }

  console.log(session)
  
  return {
    props: {},
  };
};