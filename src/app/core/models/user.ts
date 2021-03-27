import { StringUtil } from '../../shared/util/string.util';
import { UserRole } from './user-role';

export class User {
    nickname: string;
    email: string;
    name: string;
    lastName: string;
    password?: string;
    authUserRoleList?: UserRole[];
    phone?: string;    
}
