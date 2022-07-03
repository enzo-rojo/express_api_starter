const { isNil, isString } = require('lodash');

const usernameValidation = (username) => {
	if (isNil(username) || username === '') {
		return 'Le username doit être renseigné';
	}
	if (!isString(username)) {
		return 'Le username doit être une chaîne de caractères';
	}
	if (username.length > 50) {
		return 'Le username ne doit pas contenir plus de 50 caractères';
	}
	return null;
};

const passwordValidation = (password) => {
	if (isNil(password) || password === '') {
		return 'Le mot de passe doit être renseigné';
	}
	if (password.length < 8 || password.length > 60) {
		return 'Le mot de passe doit contenir entre 8 et 60 caractères';
	}
	return null;
};

const emailValidation = (email) => {
	const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

	if (isNil(email) || email === '') {
		return "L'adresse email doit être renseigné.";
	}
	if (!isString(email)) {
		return "L'adresse email' doit être une chaîne de caractères.";
	}
	if (!regex.test(email)) {
		return "L'adresse email doit être indiquée dans un format approprié.";
	}
	return null;
};

module.exports = (data) => {
	const { username, email, password } = data;

	const errors = [];

	const usernameError = usernameValidation(username);
	if (usernameError) errors.push({ field: 'username', message: usernameError });

	const emailError = emailValidation(email);
	if (emailError) errors.push({ field: 'email', message: emailError });

	const passwordError = passwordValidation(password);
	if (passwordError) errors.push({ field: 'password', message: passwordError });

	return errors.length > 0 ? errors : null;
};
