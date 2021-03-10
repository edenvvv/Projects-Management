var expect = require('chai').expect



describe('Login-Page', () => {
    describe('- Email validation:', () => {
        it('true if email format is validate', () => {
            var validEmailAddress = 'ex@abc.xyz'
            expect(validateEmail(validEmailAddress)).to.be.eql(true)
        })
        it('false if email format is not validate', () => {
            var validEmailAddress = 'ex'
            expect(validateEmail(validEmailAddress)).to.be.eql(false)
        })
        it('false if email format is not validate', () => {
            var validEmailAddress = 'ex@e'
            expect(validateEmail(validEmailAddress)).to.be.eql(false)
        })
    })
    
    describe('- Password validation', () => {
            it('true if email format is validate', () => {
                var validPassword = 'password123'
                expect(validatePassword(validPassword)).to.be.eql(true)
            })

            it('true if email format is validate', () => {
                var validPassword = 'A!12A!'
                expect(validatePassword(validPassword)).to.be.eql(true)
            })
    
            it('false if password format is not validate', () => {
                var invalidPassword = ''
                expect(validatePassword(invalidPassword)).to.be.eql(false)
            })
    })   
})



// javascript function that simulates the jQuery function from login-ver.js
function validateEmail (Email) {
	const validEmailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if(Email.trim().match(validEmailFormat) == null){
			return false;
	}
	else if (Email.trim() == ''){
			return false;
	}
	return true;
}

function validatePassword (input) {
	if (input.trim() == ''){
			return false;
	}
	return true;
}