import React from "react";
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.login}>
            <a href={'http://www.last.fm/api/auth/?api_key=77bf7ce54bf492251d0936826d710388&cb=http://localhost:3000'}>LOGIN TO PORTAL</a>
        </div>
    );
}

export default Login;
