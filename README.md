# mail-promise
Simplifies interface for nodemailer and returns a promise. Also includes TypeScript definition.

- TypeScript example:

            import { MailService } from 'mail-promise'
            
            
            class SomeClass
            {
                private mailer: MailPromise                
                                
                constructor()
                {
                    mailer = new MailPromise(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
                }
                
                async foo(to: string, from: string, subject: string, body: string, html?: string): Promise<void> {
                
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
            
            let mailer = mailPromise(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
            
            mailer.send(to, from, subject, body, html)
                    .then(info => {
                        console.log(info.response)
                    })
                    .catch(err => {
                        console.error(err)
                    })
<br>          
