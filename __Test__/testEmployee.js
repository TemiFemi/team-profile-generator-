const Employee = require("../Library/Employee")

// creates an employee object 
test("can represent Employee", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object")
})
test("Can use contructor arguments to set name", () => {
    const name = "Temi";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can use constructor argument to set id", () => {
    const testValue = 100;
    const e = new Employee("Temi", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "temi@test.com";
    const e = new Employee("temi", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can use name to  get getName() method", () => {
    const testValue = "temi";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can use getId() to get id", () => {
    const testValue = 100;
    const e = new Employee("temi", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can use getEmail() to get email", () => {
    const testValue = "temi@test.com";
    const e = new Employee("Temi", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Temi", 1, "temi@test.com");
    expect(e.getRole()).toBe(testValue);
});