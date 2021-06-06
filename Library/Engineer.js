// importing Employee Contructor
const Employee = require("./Employee");
// engineer contructor extends employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling employee contructor 
        super(name, id, email);
        this.github = github;
    }
    // returning github from input
    getGithub() {
        return this.github;
    }
    // override employee role to engineer
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer