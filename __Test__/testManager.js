const Manager = require("../Library/manager");
const Employee = require("../Library/Employee");

test("Can use constructor argument to set office number", () => {
    const testValue = 100;
    const e = new Manager("Temi", 1, "temi@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("Return Manager when getRole() is used", () => {
    const testValue = "Manager";
    const e = new Manager("Temi", 1, "temi@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can use getOffice() to get office number", () => {
    const testValue = 100;
    const e = new Manager("Temi", 1, "temi@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue)
});