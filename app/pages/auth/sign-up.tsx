export default function Signup() {
    return (
        <>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <div><p className="my-3 mt-6 btn btn-primary normal-case text-xl w-full">Sign Up</p></div>
                        </div>
        </>
    )
}