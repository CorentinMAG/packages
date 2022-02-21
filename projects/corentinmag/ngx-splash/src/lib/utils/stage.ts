import { Observable } from "rxjs";

export interface Stage {
    messageBefore: string,
    messageAfter: string,
    observable: Observable<any>
}