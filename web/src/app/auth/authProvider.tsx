import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config: any = {
    auth: {
        authority: "https://login.microsoftonline.com/equinor.com",
        clientId: "8cc0bc46-dc8b-4e3a-8f63-98babbc6db04",
        redirectUri: window.location.origin
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

const authenticationParameters = {
    scopes: ['openid'],
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Redirect)