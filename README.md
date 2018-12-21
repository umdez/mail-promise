# mail-promise
Simplifies interface for nodemailer and returns a promise. Also includes TypeScript declaration file 
for type checking. Credentials for the email service can be passed in the `MailPromise` class constructor
or through the environment variables. Setting the credentials from the environment variables is useful
for when you want to use a mail service in multiple projects but not having them exposed.

created by Sean Maxwell June 25, 2018 


<br>



- TypeScript example:

```typescript
import { MailPromise } from 'mail-promise'


class SomeClass
{
    private readonly _mailer: MailPromise                
                    
    constructor()
    {
        this._mailer = new MailPromise(service, username, pwd); // i.e. 'Gmail', 'example@gmail.com', 'Password@1'
    }
    
    async sendMail(to: string, from: string, subject: string, body: string, html?: string, attachments?: Array<any>): Promise<void> 
    {
        try {
            let info = await this._mailer.send(to, from, subject, body, html, attachments); // html and attachments params are optional
            console.log(info.response);
        } catch (err) {
            console.error(err);
        }
    }
}
```            

<br>
            
  
- JavaScript example:

```JavaScript
var MailPromise = require('mail-promise').MailPromise

var mailer = new MailPromise(service, username, pwd) // i.e. 'Gmail', 'example@gmail.com', 'Password@1'

mailer.send(to, from, subject, body, html)
        .then(info => {
            console.log(info.response)
        })
        .catch(err => {
            console.error(err)
        })
```

<br>          
