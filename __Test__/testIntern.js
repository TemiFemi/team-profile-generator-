const Intern = require("../Library/intern");

test("Can use constructor to set the school option", () => {
    const testValue = "CSUN";
    const e = new Intern("Temi", 1, "temi@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("\"Intern\ should be returned when using getRole()", () => {
    const testValue = "Intern";
    const e = new Intern("Temi", 1, "temi@test.com", "CSUN");
    expect(e.getRole()).toBe(testValue);
});

test("getSchool() can get school info", () => {
    const testValue = "CSUN";
    const e = new Intern("Temi", 1, "temi@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})