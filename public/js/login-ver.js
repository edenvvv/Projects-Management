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

function validatePassword (Pass) {
	if (Pass.trim() == ''){
			return false;
	}
	return true;
}