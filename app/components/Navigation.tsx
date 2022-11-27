import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';


export default function Navigation() {
    const session = useSession()

    return (<>
        <div className="navbar bg-base-100 absolute">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={`${process.env.NEXT_PUBLIC_APP_URL}/protected`}>Protected Page</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/"><span><a className="btn btn-ghost normal-case text-xl">Next.js Strapi Boilerplate</a></span></Link>
            </div>
            <div className="navbar-end">
                    {session.data !== null ? (
                        <button className="btn btn-primary" onClick={signOut}>Out</button>
                    ) : (
                        <Link href="/auth/sign-in">
                            <button className="btn btn-primary">In</button>
                        </Link>
                    )}
            </div>
        </div>
    </>)
}