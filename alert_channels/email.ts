import {EmailAlertChannel} from 'checkly/constructs'

export const userEmail = new EmailAlertChannel('email-1', { 
    address: 'raccoon@checklyhq.com',
    sendFailure: true,
})