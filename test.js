let MailPromise = require('./index').default;


let mailer = new MailPromise();

mailer.send('seanpmaxwell1@gmail.com', null, null, null, '<h1>Hello</h1>')
    .then(info => {
        console.log(info.response)
    })
    .catch(err => {
        console.error(err)
    });