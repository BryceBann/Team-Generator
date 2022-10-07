const Intern = require('../lib/Intern');

test("create Intern object", () => {
    const intern = new Intern('name', 45, 'first.last@eamil.com', 'schoolName');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('name', 45, 'first.last@eamil.com', 'schoolName');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('employee role from getRole', () => {
    const intern = new Intern('name', 45, 'first.last@eamil.com', 'schoolName');

    expect(intern.getRole()).toEqual("Intern");
});