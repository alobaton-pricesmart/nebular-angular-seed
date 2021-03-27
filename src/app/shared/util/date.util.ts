import { DatePipe } from "@angular/common";
import * as moment from "moment";

export class DateUtil {

    public static FECHA_PATTERN_DD_MM_YYYY = 'dd-MM-yyyy';
    public static FECHA_PATTERN_DD_MM_YYYY_HH_MM_SS = "dd-MM-yyyy HH:mm:ss";

    public static dateToString(date: Date, format: string = this.FECHA_PATTERN_DD_MM_YYYY) {
        if (date === null || date === undefined) {
            return null;
        }
        const pipe = new DatePipe('es-CO');
        return pipe.transform(date, format);
    }

    public static stringToDate(date: string, format: string = this.FECHA_PATTERN_DD_MM_YYYY) {
        if (date === null || date === undefined) {
            return null;
        }
        return moment(date,  format.toUpperCase()).toDate();
    }
}