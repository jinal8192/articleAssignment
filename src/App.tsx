import React from "react";

const Album = React.lazy(() => import('./Album/Album'));
const Login = React.lazy(() => import('./Login/Login'));

function getToken() {
  const loggedInUser = sessionStorage.getItem('token');
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    return foundUser;
  }
}

function App() {
  const token = getToken();
  if (!token) {
    return <Login token={token} />
  } else return <Album />
}

export default App;
