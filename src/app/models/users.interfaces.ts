export interface User {
    id: string;
    nickname: string;
    email: string;
    name: string;
    lastName: string;
    password?: string;
    roles?: string[];
}
