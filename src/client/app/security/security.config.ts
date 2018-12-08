import { NbAuthSocialLink } from '@nebular/auth';

const EMAIL_PASSWORD_STRATEGY_NAME = 'emailPasswordStrategy';

const SOCIAL_LINKS: NbAuthSocialLink[] = [];

export const EMAIL_PASSWORD_STRATEGY = {
    name: EMAIL_PASSWORD_STRATEGY_NAME,
    baseEndpoint: 'http://',
    login: {
        endpoint: '/auth/sign-in',
    },
    register: {
        endpoint: '/auth/sign-up',
    },
    logout: {
        endpoint: '/auth/sign-out',
    },
    requestPass: {
        endpoint: '/auth/request-pass',
    },
    resetPass: {
        endpoint: '/auth/reset-pass',
    },
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
