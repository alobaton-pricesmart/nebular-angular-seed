import { environment } from 'src/environments/environment';

export class EnvironmentUtil {

    public static getConfigValue(configKey: string) {
        const configKeys = configKey.split('.');
        EnvironmentUtil._getConfigValue(environment, configKeys);
    }

    private static _getConfigValue(object: any, configKeys: string[]) {
        const configKey = configKeys.unshift();
        const nestedObject = object[configKey];
        if (typeof nestedObject === 'object') {
            return EnvironmentUtil._getConfigValue(nestedObject, configKeys);
        } else {
            return nestedObject;
        }
    }
}
