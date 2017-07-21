// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
    NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'v4654lH0IVJwdhEzcMiENA2blS4Px4gy',
    CLIENT_DOMAIN: 'mescobedo.eu.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/', // likely http://localhost:8083/api/
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile',
    NAMESPACE: 'http://myapp.com/roles'
};