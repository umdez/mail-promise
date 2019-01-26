let MailPromise = require('./lib/index').default;

let mailer = new MailPromise();

mailer.send('seanpmaxwell1@gmail.com', 'horse', 'horse', 'horse', '<h1>Hello</h1>')
    .then(info => {
        console.log(info.response)
    })
    .catch(err => {
        console.error(err)
    });