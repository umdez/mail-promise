export default class MailPromise {
    private service;
    private username;
    private pwd;
    constructor(service: string, username: string, pwd: string);
    send(to: string, from: string, subject: string, text: string, html?: string): any;
}
