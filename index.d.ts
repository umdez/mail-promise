/**
 * Type definition file
 *
 * created by sean maxwell June 25, 2018
 */


declare module MailPromise {

    export interface Mailer {
        send(from: string, to: string, subject: string, text: string, html?: string): Promise<any>;
    }

    function config(service: string, username: string, pwd: string): Mailer;
}

export = MailPromise
