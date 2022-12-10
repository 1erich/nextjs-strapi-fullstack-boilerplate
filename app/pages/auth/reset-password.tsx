import axios from 'axios'
import { useRouter } from 'next/router'

export default function ResetPassword() {
    const router = useRouter();
    const code = router.query.code

    const onSubmit = async (e) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/reset-password`, {
            email: e.target.email.value
        })
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className="input input-bordered w-full" name="password"/>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password Re-Type</span>
                    </label>
                    <input type="password" className="input input-bordered w-full" name="passwordre"/>
                </div>
                <div className="form-control w-full">
                    <div><button type="submit" className="my-3 mt-6 btn btn-primary normal-case text-xl w-full">Set Password</button></div>
                </div>
            </form>
        </>
    )
}