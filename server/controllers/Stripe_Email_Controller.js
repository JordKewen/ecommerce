
var pwd = require('../express_nodemailer_server/modules/p').pwd
class EmailController{


    

    sendEmail (req, res) {

        const nodemailer = require('nodemailer')

       const transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'jordankewen9@gmail.com',
                pass: pwd,
            },
        });
    console.log('EMAIL METHOD REACHED')
	const mailOptions = {
		from: 'jordankewen9@gmail.com',
	    to: 'kewen_j@hotmail.co.uk',
	    // fetching users email from the contact form
	    // replyTo: req.body.email,
	    // subject: "New message from " + req.body.name,
	    // composing body of the email
        html: '<p>'+('Hard coded subject')+ '</p><p><pre>' + 'THIS IS THE MESSAGE' + '</pre></p>'
      //req.body.subject || emptySubj  req.body.message
	};
	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.send (error)
	        // return res.redirect('/contacts')
	    }
	    console.log(`Message sent: ${info.response}`);
	    // res.redirect('/contacts')
	    return res.send ("Message send")

	});
}

}

module.exports = new EmailController();
