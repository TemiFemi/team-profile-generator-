const Engineer = require("../Library/Engineer")

test("Can use constructor to set GitHub account", () => {
    const testValue = "UserGitHub";
    const e = new Engineer("Temi", 1, "temi@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("\"Engineer\ should be returned when using getRole() ", () => {
    const testValue = "Engineer";
    const e = new Engineer("Temi", 1, "temi@test.com", "UserGitHub");
    expect(e.getRole()).toBe(testValue);
});

test("Can use getGithub() to get username for Github", () => {
    const testValue = "UserGitHub";
    const e = new Engineer("Temi", 1, "temi@test.com", testValue);
    expect(e.getGithub()).toBe(testValue)
})