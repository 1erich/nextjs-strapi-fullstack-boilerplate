import Link from 'next/link'
import { useSession } from 'next-auth/react';
import Avatar from './Avatar';


export default function Navigation() {
    const session = useSession()

    return (<>
        <div className="navbar bg-base-100 absolute">
            <div className="navbar-start">
                {session.status !== 'authenticated' ? (
                    <Link href="/auth/sign-in">
                        <button className="btn btn-primary">Sign In</button>
                    </Link>
                ) : (
                    <>
                        <Avatar />
                    </>
                )}
            </div>
            <div className="navbar-center">
                <Link href="/"><span><a className="btn btn-ghost normal-case text-xl">Next.js Strapi Boilerplate</a></span></Link>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    </>)
}