var expect = require('chai').expect
var validateLogin = require("../public/js/login-ver")



describe('Login', () => {
    describe('#Email Address', () => {
        it('should return true if get valid email address format', () => {
            var validEmailAddress = 'check@gov.il'
            expect(validateLogin.validate(validEmailAddress)).to.be.eql(true)
        })

		it('should return false if get invalid email address ending format', () => {
            var invalidEmailAddress = 'check@mail'
            expect(validateEmail(invalidEmailAddress)).to.be.eql(false)
        })

		it('should return false if get email address without @', () => {
            var invalidEmailAddress = 'checkmail.il'
            expect(validateEmail(invalidEmailAddress)).to.be.eql(false)
        })

		it('should return false if get empty email address ending', () => {
            var invalidEmailAddress = 'check@'
            expect(validateEmail(invalidEmailAddress)).to.be.eql(false)
        })

		it('should return false if get empty email address', () => {
            var emptyEmailAddress = ''
            expect(validateEmail(emptyEmailAddress)).to.be.eql(false)
        })
    })

    describe('#Password', () => {
        it('should return true if get valid password', () => {
            var validPassword = 'a12'
            expect(validatePassword(validPassword)).to.be.eql(true)
        })

		it('should return false if get invalid password', () => {
            var invalidPassword = ''
            expect(validatePassword(invalidPassword)).to.be.eql(false)
        })
    })
})