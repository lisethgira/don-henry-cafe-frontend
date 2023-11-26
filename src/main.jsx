import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{redirect_uri: window.location.origin}} > */}
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        {/* </Auth0Provider> */}
    </React.StrictMode >
)
