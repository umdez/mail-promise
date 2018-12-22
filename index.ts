/****************************************************************
 *                         MailPromise
 *
 * Simplifies the interface for nodemailer and returns a promise
 *
 * created by Sean Maxwell Jun 25, 2018
 ***************************************************************/

import * as nodemailer from 'nodemailer'
import * as Promise    from 'bluebird'
import * as Mail       from 'nodemailer/lib/mailer'


export class MailPromise
{
    private readonly _mailer: Mail;

    constructor(service?: string, username?: string, pwd?: string)
    {
        let credentials = {
            service: service || process.env.MAILPROMISESERVICE,
            auth: {
                user: username || process.env.MAILPROMISEUSER,
                pass: pwd || process.env.MAILPROMISEPWD
            }
        };

        this._mailer = nodemailer.createTransport(credentials);
    }

    public send(to: string, from: string, subject: string, text: string, html?: string,
                attachments?: Array<any>)
    {
        let options: any = {
            to: to,
            from: from,
            subject: subject,
            text: text
        };

        if (html) {
            options.html = html;
        }

        if (attachments) {
            options.attachments = attachments;
        }

        return new Promise((resolve, reject) => {

            this._mailer.sendMail(options, (err, info) => {

                err ? reject(err) : resolve(info);
            })
        })
    }
}
