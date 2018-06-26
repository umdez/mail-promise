# mail-promise
Simplifies interface for nodemailer and returns a promise. Also includes TypeScript definition.

- TypeScript example:

            import * as MailPromise from 'mail-promise'
            import { Mailer }       from 'mail-promise'
            
            
            class SomeClass
            {
                private mailer: Mailer                
                                
                constructor()
                {
                    mailer = MailPromise.config(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
                }
                
                async sendMail(to: string, from: string, subject: string, body: string, html?: string): Promise<void> {
                
                    try {
                        let info = await mailer.send(to, from, subject, body, html)
                        console.log(info.response)
                    }
                    catch(err) {
                        console.error(err)
                    }
                }
            }
                
            
  
- JavaScript example:

            var mailPromise = require('mail-promise')
            
            var mailer = mailPromise.config(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
            
            mailer.send(to, from, subject, body, html)
                    .then(info => {
                        console.log(info.response)
                    })
                    .catch(err => {
                        console.error(err)
                    })
<br>          
