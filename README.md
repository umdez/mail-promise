# mail-promise
Simplifies interface for nodemailer and returns a promise. Also includes TypeScript declaration file for type checking.

created by Sean Maxwell June 25, 2018 

- TypeScript example:

            import * as MailPromise from 'mail-promise'
            
            
            class SomeClass
            {
                private mailer: MailPromise                
                                
                constructor()
                {
                    mailer = new MailPromise(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
                }
                
                async sendMail(to: string, from: string, subject: string, body: string, html?: string): Promise<void> 
                {
                
                    try {
                        let info = await this.mailer.send(to, from, subject, body, html) // html param is optional
                        console.log(info.response)
                    }
                    catch(err) {
                        console.error(err)
                    }
                }
            }
                
            
  
- JavaScript example:

            var MailPromise = require('mail-promise')
            
            var mailer = new MailPromise(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
            
            mailer.send(to, from, subject, body, html)
                    .then(info => {
                        console.log(info.response)
                    })
                    .catch(err => {
                        console.error(err)
                    })
<br>          
