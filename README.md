# mail-promise
Simplifies the interface for nodemailer and returns a promise. Also includes TypeScript declaration file 
for type checking. Credentials for the email service can be passed in the `MailPromise` class constructor
or through the environment variables. Setting the credentials from the environment variables is useful
for when you want to use mail credentials in multiple projects but not risk having them exposed.

To set the credentials from the environment variables you need to create one for the service, the username,
and the password. The file you edit will vary depending on your system. I set mine on Linux from _/etc/environment_.

The three variables are:
- MAILPROMISESERVICE="your service"  // i.e. Gmail
- MAILPROMISEUSER="email/username"   // i.e. seanmaxwell@gmail.com
- MAILPROMISEPWD="password"          // i.e. Password@1


If you pass the variables from the constructor, MailPromise will use those instead. If you leave an
entry blank in the constructor, MailPromise will try to pull the environment variables. 


created by Sean Maxwell June 25, 2018 


<br>



- TypeScript example:

```typescript
import { MailPromise } from 'mail-promise'


class SomeClass
{
    private readonly _mailer: MailPromise;                
                    
    constructor()
    {
        this._mailer = new MailPromise('Gmail', 'example@gmail.com', 'Password@1');
        // or this._mailer = new MailPromise() // if using environment variables
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
var MailPromise = require('mail-promise').MailPromise;

var mailer = new MailPromise('Gmail', 'example@gmail.com', 'Password@1'); 

mailer.send(to, from, subject, body, html)
        .then(info => {
            console.log(info.response);
        })
        .catch(err => {
            console.error(err);
        })
```

<br>          
