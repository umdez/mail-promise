/**
 * Type definition file
 *
 * created by sean maxwell June 25, 2018
 */


class MailPromise {
    constructor(service: string, username: string, pwd: string);
    send(to: string, from: string, subject: string, text: string, html?: string): Promise<any>;
}

namespace MailPromise {}

export = MailPromise

