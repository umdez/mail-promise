/****************************************************************
 *                         MailPromise
 *
 * Simplifies the interface for nodemailer and returns a promise
 *
 * created by Sean Maxwell Jun 25, 2018
 ***************************************************************/

import * as nodemailer from 'nodemailer'
import * as Promise    from 'bluebird'


export default class MailPromise
{
    private service: string
    private username: string
    private pwd: string

    constructor(service: string, username: string, pwd: string)
    {
        this.service = service
        this.username = username
        this.pwd = pwd
    }

    public send(to: string, from: string, subject: string, text:string, html?: string)
    {
        let credentials = {
            service: this.service,
            auth: {
                user: this.username,
                pass: this.pwd
            }
        }

        let options = {
            from: from,
            to: to,
            subject: subject,
            text: text
        }

        return new Promise(function(resolve, reject)
        {
            nodemailer
                .createTransport(credentials)
                .sendMail(options, (err, info) => {

                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(info)
                    }
                })
        })
    }
}