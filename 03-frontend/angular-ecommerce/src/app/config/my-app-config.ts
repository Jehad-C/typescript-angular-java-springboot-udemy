export default {
    oidc: {
        clientId: '{CLIENT-ID}',
        issuer: 'http://example.com',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],
    }
}
