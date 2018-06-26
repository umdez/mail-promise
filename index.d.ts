/**
 *
 *
 * created by sean maxwell June 25, 2018
 */


// declare class MailPromise {
//     constructor(service: string, username: string, pwd: string);
//     send(from: string, to: string, subject: string, text: string, html?: string): Promise<any>;
// }


// Pick up here, next to export a function which returns an object literal


declare module MailPromise {

    export interface Mailer {
        send(from: string, to: string, subject: string, text: string, html?: string): Promise<any>;
    }

    function config(service: string, username: string, pwd: string): Mailer;
}

export = MailPromise
