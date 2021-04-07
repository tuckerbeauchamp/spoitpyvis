import React  from "react";
import "bootstrap/dist/css/bootstrap.css";

const provider_url =
  "https://accounts.spotify.com/authorize?client_id=3f3b684090ad4f459360c1ce048deaf9&scope=user-library-read+user-top-read&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Fauth&response_type=code&show_dialog=True";
function SignIn() {
  return (
    <div className="card mb-4 box-shadow">
      <div className="card-body">
        <h1 className="card-title">Connect your Spotify account</h1>
        <p>Allow access to your followed artists.</p>
        <a href={provider_url}>
          <button
            type="button"
            className="btn btn-lg btn-block btn-outline-primary"
          >
            Connect
          </button>
        </a>
      </div>
    </div>
  );
}

export default SignIn;
