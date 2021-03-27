import { Role } from "./role";

export class UserRole {
    authUserRolePk?: { nickname: string, roleId: string };
    authRole?: Role;
}