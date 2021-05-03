const fs = require('fs');

String.prototype.hashCode = function () {
	// http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
	var hash = 0,
		i,
		chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr = this.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

module.exports = {
	createUser: function (username, email, password) {
		fs.readFile(
			`${__dirname}/database/users.json`,
			'utf-8',
			(err, data) => {
				if (err) throw err;
				var usersObject = JSON.parse(data);
				usersObject.users.push({
					userIdCount: 100,
					userId: parseInt(Math.random().toString().split('.')[0]),
					name: username,
					email: email,
					password: password.hashCode(),
				});

				fs.writeFile(
					`${__dirname}/database/users.json`,
					JSON.stringify(usersObject, null, 4),
					(err) => {
						if (err) throw err;
					}
				);
			}
		);
	},
};
