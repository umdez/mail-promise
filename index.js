/****************************************************************
 *                         MailService
 *
 * Simplifies the interface for nodemailer and returns a promise
 *
 * usage:
 *
 * import { mailService } from 'backend-tools'
 * var mailer = mailService(service, username, pwd)
 * var info = await mailer.send(to, from, subject, body)
 ***************************************************************/

var nodemailer = require('nodemailer');
var Promise    = require('bluebird');


function mailService(service, username, pwd)
{
    // Set the mail service
    let credentials = {
        service: service,
        auth: {
            user: username,
            pass: pwd
        }
    };

    function sendMail(to, from, subject, body)
    {
        let options = {
            to: to,
            from: from,
            subject: subject,
            text: body
        };

        return new Promise(function(resolve, reject)
        {
            nodemailer
                .createTransport(credentials)
                .sendMail(options, (err, info) => {
                    err ? reject(err) : resolve(info.response)
                })
        })
    }

    return {
        send: sendMail
    }
}
