export default function Signup() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value)

        //alert(e.target.email.value);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input name="username" type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <div><button type="submit" className="my-3 mt-6 btn btn-primary normal-case text-xl w-full">Sign Up</button></div>
                </div>
            </form>
        </>
    )
}