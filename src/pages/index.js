import cookie from 'cookie';
import {verifyToken} from '../utils/jwt';

export async function getServerSideProps(context) {
    const cookies = cookie.parse(context.req.headers.cookie || '');
    const token = cookies.token;

    let user = null;
    if (token && verifyToken(token)) {
        user = verifyToken(token);
    }

    return {
        props: {user},
    };
}

export default function Home({user}) {

    const login = async () => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username: 'admin', password: 'password'}),
            });

            if (res.ok) {
                window.location.reload();
            }
        } catch (_) {

        }
    };

    const logout = async () => {
        try {
            const res = await fetch('/api/logout', {
                method: 'POST',
            });

            if (res.ok) {
                window.location.reload();
            }
        } catch (_) {

        }
    };

    const getUser = async () => {
        try {
            const res = await fetch('/api/user');
            const data = await res.json();

            if (res.ok) {
                console.log(data.user);
            }
        } catch (_) {

        }
    };

    return (
        <div className='h-screen flex items-center justify-center gap-6'>
            <div>
                <div className='flex gap-6'>
                    {!user?.name ?
                        <button className='bg-blue-500 w-20 h-8 rounded-lg text-white' onClick={login}>Login</button> :
                        <>
                            <button className='bg-blue-500 w-20 h-8 rounded-lg text-white' onClick={logout}>Logout
                            </button>
                            <button className='bg-blue-500 w-20 h-8 rounded-lg text-white' onClick={getUser}>Get User
                            </button>
                        </>}
                </div>
                <p className='text-2xl text-center'>{user?.name}</p>
            </div>
        </div>
    );
}
