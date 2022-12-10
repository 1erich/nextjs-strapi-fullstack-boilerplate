import axios from 'axios'

export default function ForgotPassword() {

    const onSubmit = async (e) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/forgot-password`, {
            email: e.target.email.value
        })
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full" value="lazymale92@gmail.com" name="email"/>
                </div>
                <div className="form-control w-full">
                    <div><button type="submit" className="my-3 mt-6 btn btn-primary normal-case text-xl w-full">Send Passwordreset Link</button></div>
                </div>
            </form>
        </>
    )
}