class User {
    constructor(username, email, pwd, firstname, lastname) {
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.pwd = pwd;
    }

    validate() {
        const errors = [];

        if (!this.username || typeof this.username !== 'string') {
            errors.push('Username is required and must be a string');
        } else if (!this.email || typeof this.email !== 'string') {
            errors.push('Please provide a valid email for the user');
        } else if (!this.firstname || typeof this.firstname !== 'string') {
            errors.push('Please add the first name for the user');
        } else if (!this.lastname || typeof this.lastname !== 'string') {
            errors.push('Please provide the second name of the user');
        } else if (!this.password || typeof this.password !== 'string') {
            errors.push('Please provide a valid password for the user');
        }

        return errors;
    }
}

export default User;