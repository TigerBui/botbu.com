import jwt from "express-jwt";
import jwks from 'jwks-rsa';
const jwtIoConfig = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-7tnp3ac4.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://tigerjs.tech',
    issuer: 'https://dev-7tnp3ac4.us.auth0.com/',
    algorithms: ['RS256']
});

export default jwtIoConfig;
