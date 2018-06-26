/****************************************************************
 *                         MailService
 *
 * Simplifies the interface for nodemailer and returns a promise
 *
 * created by sean maxwell Jun25, 2018
 ***************************************************************/

var nodemailer = require('nodemailer');
var Promise    = require('bluebird');


function config(service, username, pwd)
{
    // Set the mail service
    let credentials = {
        service: service,
        auth: {
            user: username,
            pass: pwd
        }
    };

    function send(from, to, subject, text, html)
    {
        // Configure the email to send
        let options = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };

        return new Promise(function(resolve, reject)
        {
            if(html) {
                options.html = html
            }

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
        send: send
    }
}

module.exports = {
    config: config,
};