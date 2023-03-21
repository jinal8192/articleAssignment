import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import Api from "../Api/api";
import styles from './Login.module.css';
const Album = React.lazy(() => import('../Album/Album'));

function Login({ token }) {
    const [loading, setLoading] = useState('login');
    const [searchParams, setSearchParams] = useSearchParams();
    const loggedInOrNot = async () => {
        const token = window?.location?.href?.includes('token')
        if (token) {
            try {
                setLoading('loader');
                const response = await Api.loginWithSession();
                const data = await response.json();
                setSearchParams('');
                setLoading('album');
                sessionStorage.setItem('token', JSON.stringify(data));
            } catch (err) {
                console.log(err);
            }
        }
    };

    if (loading === 'login') {
        if (!token) {
            loggedInOrNot()
        }
        return (
            <div className={styles.login}>
                <a href={'http://www.last.fm/api/auth/?api_key=77bf7ce54bf492251d0936826d710388&cb=http://localhost:3000'}>LOGIN TO PORTAL</a>
            </div>
        );
    } else if (loading === 'album') {
        return <Album />
    }
    else {
        return <div>Loading....</div>
    }
}

export default Login;
