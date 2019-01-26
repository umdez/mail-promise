let MailPromise = require('./lib/index').default;

let mailer = new MailPromise();

mailer.send(null, 'blah', 'foo', 'bar', '<h1>Hello</h1>')
    .then(info => {
        console.log(info.response)
    })
    .catch(err => {
        console.error(err)
    });