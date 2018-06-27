/****************************************************************
 *                         MailService
 *
 * Simplifies the interface for nodemailer and returns a promise
 *
 * created by sean maxwell Jun25, 2018
 ***************************************************************/

var nodemailer = require('nodemailer');
var Promise    = require('bluebird');


module.exports = function(service, username, pwd)
{

    this.send = function(from, to, subject, text, html)
    {


        // ******* Configure Settings ******** //

        let credentials = {
            service: service,
            auth: {
                user: username,
                pass: pwd
            }
        };

        let options = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };

        if(html) options.html = html;



        // ******* Return the Promise Object ******** //

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

    };

    return this
};
