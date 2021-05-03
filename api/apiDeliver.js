const UserOperations = require('./UserOperations');

module.exports = function (url) {
	var returnObject = {};

	var splitURL = url.split('/');

	switch (url.split('/')[1]) {
		case 'user': // Get information about specific user, ex: api/user/vince
			returnObject.userid = '234543';
			break;

		case 'userop': //Preform operations on user accounts
			returnObject.statusCode = 200;
			returnObject.statusMessage = 'You did it yay';
			UserOperations.createUser(splitURL[2], splitURL[3], splitURL[3]);
			break;

		default:
			returnObject.statusCode = 404;
			returnObject.statusMessage = 'E: API call not found';
	}

	return JSON.stringify(returnObject);
};
