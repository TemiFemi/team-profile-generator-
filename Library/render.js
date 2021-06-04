const path = require("path");
const fs = require("fs");

const tempD = path.resolve(__dirname, "../temp");

const render = employees => {
    const html = [];

    html.push(...employees.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager))
    );
    html.push(...employees.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer))
    );
    html.push(...employees.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern))
    );

    return mainRender(html.join(""));
};

const renderManager = manager => {
    let temp = fs.readFileSync(path.resolve(tempD, "manager.html"), "utf8");
    temp = switchPlace(temp, "name", manager.getName());
    temp = switchPlace(temp, "role", manager.getRole());
    temp = switchPlace(temp, "email", manager.getEmail());
    temp = switchPlace(temp, "id", manager.getId());
    temp = switchPlace(temp, "officeNumber", manager.getOfficeNumber());
    return temp;
}
const renderEngineer = engineer => {
    let temp = fs.readFileSync(path.resolve(tempD, "Engineer.html"), "utf8");
    temp = switchPlace(temp, "name", engineer.getName());
    temp = switchPlace(temp, "role", engineer.getRole());
    temp = switchPlace(temp, "email", engineer.getEmail());
    temp = switchPlace(temp, "id", engineer.getId());
    temp = switchPlace(temp, "github", engineer.getGithub());
    return temp;
};

const renderIntern = intern => {
    let temp = fs.readFileSync(path.resolve(tempD, "intern.html"), "utf8");
    temp = switchPlace(temp, "name", intern.getName());
    temp = switchPlace(temp, "role", intern.getRole());
    temp = switchPlace(temp, "email", intern.getEmail());
    temp = switchPlace(temp, "id", intern.getId());
    temp = switchPlace(temp, "school", intern.getSchool());
    return temp;
};

const mainRender = html => {
    const temp = fs.readFileSync(path.resolve(tempD, "main.html"), "utf8");
    return switchPlace(temp, "team", html);
};

const switchPlace = (temp, placeholder, value) => {
    const patt = new RegExp("{{ " + placeholder + " }}", "gm");
    return temp.replace(patt, value);
}

module.exports = render;
