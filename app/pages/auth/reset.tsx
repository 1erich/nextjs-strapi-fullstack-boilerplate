export default function Reset() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Username or Email</span>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}