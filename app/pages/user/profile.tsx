import { getSession } from 'next-auth/react';
import axios from 'axios';

interface profileProps {
    profile: any
}

export default function UserProfile({ ...props }) {
    return (<>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${props.avatar.url}`} />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">{props.name}</h1>
                    <p className="py-6">{props.info}</p>
                </div>
            </div>
        </div>
    </>)
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    // Check if session exists or not, if not, redirect
    if (session === null) {
        return {
            redirect: {
                destination: '/auth/sign-in',
                permanent: true,
            },
        };
    }
    try {
        const res = await axios.get(`http://localhost:1337/api/profiles/${session.id}?populate=deep`, {
            headers: {
                Authorization: "Bearer " + session.jwt
            }
        });

        const profile = {
            name: session.user.email,
            ...res.data.data.attributes,
            avatar: res.data.data.attributes.avatar.data.attributes ?? false
        }

        return { props: profile }
    } catch (error) {
        return { props: error };
    }
};