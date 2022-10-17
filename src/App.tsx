import React, { Suspense, useEffect, useState } from "react";
import Api from "./Api/api";

// import SpotifyWebApi from "spotify-web-api-js";
const Album = React.lazy(() => import('./Album'));
const Login = React.lazy(() => import('./Login'));

// const s = new SpotifyWebApi();
interface User {
  error? : string;
  session?: Object;
}

function App() {

  const [user, setUser] = useState<User>();
  const token = window?.location?.href?.includes('token')

  const loggedInOrNot = async () => {
    if (token) {
      try {
        const response = await Api.loginWithSession();
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    loggedInOrNot();
  }, []);


  return (
    <div className="app">
      {!user?.error ? <Suspense fallback={<div>Loading...</div>}>
        <Album />
      </Suspense> : <Login />}
    </div>
  );
}

export default App;
