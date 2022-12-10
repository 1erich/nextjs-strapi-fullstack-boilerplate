import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function SignIn() {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        if (result.ok) {
            router.replace('/');
            return;
        }
        alert('Credential is not valid');
    };


    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Username or Email</span>
                    </label>
                    <input name="email" type="text" placeholder="" value="hello@world.com" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="" value="123123123" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <div><button type="submit" className="mt-6 btn btn-primary normal-case text-xl w-full">Sign In</button></div>
                    <div><Link href="forgot-password"><p className="btn btn-ghost normal-case">Forgot your Password?</p></Link></div>
                </div>
            </form>
            <div className="form-control w-full">
                <div className="divider">OR</div>
                <div><button type="submit" className="my-3 mt-6 btn btn-primary normal-case text-xl w-full">Google SSO</button></div>
                <div className="divider">OR</div>
                <div><Link href="sign-up"><button type="submit" className="my-3 mt-6 btn btn-secondary normal-case text-xl w-full">Sign Up</button></Link></div>
            </div>
        </>
    )
}