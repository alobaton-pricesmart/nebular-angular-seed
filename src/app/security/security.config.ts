import { NbAuthSocialLink, NbOAuth2AuthStrategyOptions, NbOAuth2ClientAuthMethod, NbAuthOAuth2Token, NbPasswordAuthStrategyOptions } from '@nebular/auth';
import { environment } from 'src/environments/environment';

const OAUTH_STRATEGY_NAME = 'oauthStrategy';
const PASSWORD_STRATEGY_NAME = 'passwordStrategy';
// Nebular token key in localStorage.
export const AUTH_APP_TOKEN = 'auth_app_token';

const SOCIAL_LINKS: NbAuthSocialLink[] = [];

export const OAUTH_STRATEGY = {
    name: OAUTH_STRATEGY_NAME,
    baseEndpoint: `${environment.auth}`,
    clientId: 'api-client',
    clientSecret: 'api-secret',
    clientAuthMethod: NbOAuth2ClientAuthMethod.BASIC,
    redirect: {
        success: '/',
        failure: null,
    },
    defaultErrors: ['auth.logIn.errors.default'],
    defaultMessages: ['auth.logIn.messages.default'],
    token: {
        endpoint: '/oauth/token',
        grantType: 'password',
        redirectUri: null,
        scope: null,
        requireValidToken: false,
        class: NbAuthOAuth2Token,
        key: 'access_token',
    },
    refresh: {
        endpoint: '/oauth/token',
        grantType: 'refresh_token',
        scope: null,
        requireValidToken: false
    }
} as NbOAuth2AuthStrategyOptions;

export const PASSWORD_STRATEGY = {
    name: PASSWORD_STRATEGY_NAME,
    baseEndpoint: `${environment.auth}`,
    login: false,
    register: {
        alwaysFail: false,
        endpoint: '/oauth/register',
        method: 'post',
        redirect: {
            success: '/auth/login',
            failure: null
        },
        requireValidToken: false,
        defaultErrors: ['auth.register.errors.default'],
        defaultMessages: ['auth.register.messages.default'],
    },
    logout: {
        alwaysFail: false,
        endpoint: '/oauth/logout',
        method: 'delete',
        redirect: {
            success: '/auth/login',
            failure: null
        },
        requireValidToken: false,
        defaultErrors: ['auth.logOut.errors.default'],
        defaultMessages: ['auth.logOut.messages.default'],
    },
    requestPass: {
        alwaysFail: false,
        endpoint: '/oauth/recovery-password',
        method: 'post',
        requireValidToken: false,
        defaultErrors: ['auth.requestPassword.errors.default'],
        defaultMessages: ['auth.requestPassword.messages.default'],
    },
    resetPass: {
        alwaysFail: false,
        endpoint: '/oauth/reset-password',
        method: 'post',
        redirect: {
            success: '/auth/login',
            failure: null
        },
        defaultErrors: ['auth.resetPassword.errors.default'],
        defaultMessages: ['auth.resetPassword.messages.default'],
        resetPasswordTokenKey: 'token',
    },
    token: {
        class: NbAuthOAuth2Token,
        key: 'token',
    }
} as NbPasswordAuthStrategyOptions;

export const SECURITY_FORMS = {
    login: {
        redirectDelay: 0,
        strategy: OAUTH_STRATEGY_NAME,
        rememberMe: true,
        showMessages: {
            success: true,
            error: true,
        },
        socialLinks: SOCIAL_LINKS,
    },
    register: {
        redirectDelay: 0,
        strategy: PASSWORD_STRATEGY_NAME,
        showMessages: {
            success: true,
            error: true,
        },
        terms: false,
        socialLinks: SOCIAL_LINKS,
    },
    requestPassword: {
        redirectDelay: 0,
        strategy: PASSWORD_STRATEGY_NAME,
        showMessages: {
            success: true,
            error: true,
        },
        socialLinks: SOCIAL_LINKS,
    },
    resetPassword: {
        redirectDelay: 0,
        strategy: PASSWORD_STRATEGY_NAME,
        showMessages: {
            success: true,
            error: true,
        },
        socialLinks: SOCIAL_LINKS,
    },
    logout: {
        redirectDelay: 0,
        strategy: PASSWORD_STRATEGY_NAME,
    },
    validation: {
        password: {
            required: true,
            minLength: 4,
            maxLength: 10,
        },
        nickname: {
            required: true,
        },
        email: {
            required: true,
        },
        name: {
            required: true,
        },
        lastName: {
            required: true,
        }
    },
};

export const EMAIL_PASSWORD_ACCESS_CONTROL = {
    guest: {
        view: '*',
    },
    user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
    },
};
