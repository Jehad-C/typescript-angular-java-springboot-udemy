export default {
    oidc: {
        clientId: '{CLIENT-ID}',
        issuer: '{ISSUER}',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],
    }
}
