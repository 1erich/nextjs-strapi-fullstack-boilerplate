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
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={onSubmit}>
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Username or Email</span>
                                </label>
                                <input name="email" type="text" placeholder="" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <div><button type="submit" className="my-3 mt-6 btn btn-primary normal-case text-xl w-full">Sign In</button></div>
                                <div><Link href="reset-password"><p className="btn btn-ghost normal-case">Password reset</p></Link></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}