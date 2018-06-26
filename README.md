# mail-promise
Simplifies interface for nodemailer and returns a promise. Also includes TypeScript definition.

- example:

            import { mailService } from 'backend-tools'
            
            let mailer = mailService(service, username, pwd)   // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
            let info = await mailer.send(to, from, subject, body)
            console.log(info)
  
  
<br>          
