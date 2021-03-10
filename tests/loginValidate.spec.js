var expect = require('chai').expect
var validateLogin = require("../public/js/login-ver")




describe('Login', () => {
    describe('#Email Address', () => {
        it('should return true if get valid email address format', () => {
            var validEmailAddress = 'check@gov.il'
            expect(validateLogin.validateEmail(validEmailAddress)).to.be.eql(true)
        })

		
    })

    
})

