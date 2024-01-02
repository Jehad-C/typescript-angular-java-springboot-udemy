export default {
    oidc: {
        clientId: '{CLIENT-ID}',
        issuer: 'https://example.com',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],
    }
}
