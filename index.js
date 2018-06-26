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

    function sendMail(from, to, subject, text, html)
    {
        // Configure the email to send
        let options = {
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html
        };

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

    return {
        send: sendMail
    }
}

module.exports = {
    mailService: mailService,
};