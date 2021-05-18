import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logMessage(msg: String) {
        console.log(msg);
    }
}