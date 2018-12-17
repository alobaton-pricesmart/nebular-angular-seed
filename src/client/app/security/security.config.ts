import { NbAuthSocialLink, NbAuthJWTToken } from '@nebular/auth';

const EMAIL_PASSWORD_STRATEGY_NAME = 'emailPasswordStrategy';

const SOCIAL_LINKS: NbAuthSocialLink[] = [];

export const EMAIL_PASSWORD_STRATEGY = {
    name: EMAIL_PASSWORD_STRATEGY_NAME,
    baseEndpoint: 'http://',
    login: {
        endpoint: '/auth/sign-in',
        defaultErrors: ['auth.logIn.errors.default'],
        defaultMessages: ['auth.logIn.messages.default'],
    },
    register: {
        endpoint: '/auth/sign-up',
        defaultErrors: ['auth.register.errors.default'],
        defaultMessages: ['auth.register.messages.default'],
    },
    logout: {
        endpoint: '/auth/sign-out',
        defaultErrors: ['auth.logOut.errors.default'],
        defaultMessages: ['auth.logOut.messages.default'],
    },
    requestPass: {
        endpoint: '/auth/request-pass',
        defaultErrors: ['auth.requestPassword.errors.default'],
        defaultMessages: ['auth.requestPassword.messages.default'],
    },
    resetPass: {
        endpoint: '/auth/reset-pass',
        defaultErrors: ['auth.resetPassword.errors.default'],
        defaultMessages: ['auth.resetPassword.messages.default'],
    },
    token: {
        class: NbAuthJWTToken,
        key: 'token'
    }
};

export const EMAIL_PASSWORD_FORMS = {
    login: {
        redirectDelay: 0,
        strategy: EMAIL_PASSWORD_STRATEGY_NAME,
        rememberMe: true,
        showMessages: {
            success: true,
            error: true,
        },
        socialLinks: SOCIAL_LINKS,
    },
    register: {
        redirectDelay: 0,
        strategy: EMAIL_PASSWORD_STRATEGY_NAME,
        showMessages: {
            success: true,
            error: true,
        },
        terms: true,
        socialLinks: SOCIAL_LINKS,
    },
    requestPassword: {
        redirectDelay: 0,
        strategy: EMAIL_PASSWORD_STRATEGY_NAME,
        showMessages: {
            success: true,
            error: true,
        },
        socialLinks: SOCIAL_LINKS,
    },
    resetPassword: {
        redirectDelay: 0,
        strategy: EMAIL_PASSWORD_STRATEGY_NAME,
        showMessages: {
            success: true,
            error: true,
        },
        socialLinks: SOCIAL_LINKS,
    },
    logout: {
        redirectDelay: 0,
        strategy: EMAIL_PASSWORD_STRATEGY_NAME,
    },
    validation: {
        password: {
            required: true,
            minLength: 4,
            maxLength: 8,
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
