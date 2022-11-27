import { signOut } from 'next-auth/react';
import { getSession } from 'next-auth/react';

import Link from 'next/link';

export default function Avatar() {
    const session = getSession()

    return (
        <>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span>MX</span>
                        </div>
                    </div>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
                    <li><Link href={`${process.env.NEXT_PUBLIC_APP_URL}/user/profile`}>My Profile</Link></li>
                    <li><button onClick={() => {signOut()}}>Sign Out</button></li>
                </ul>
            </div>
        </>
    )
}

