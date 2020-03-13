import React from "react";

import GoogleLogin from "react-google-login";

const Login = props => {
  return (
    <React.Fragment>
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId="380576729223-su4et6emak3dp02dseival0kfl656omq.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={(props.value = "true")}
        onFailure={props.response}
        cookiePolicy={"single_host_origin"}
      />
      <h1>Name:{props.name}</h1>
      <br />
      <h1>Image:</h1>
      <img src={props.image} alt="" />
    </React.Fragment>
  );
};

export default Login;
