const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('name', 45, 'first.last@eamil.com', 'firstLast45');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get github value', () => {
    const engineer = new Engineer('name', 45, 'first.last@eamil.com', 'firstLast45');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role from getRole', () => {
    const engineer = new Engineer('name', 45, 'first.last@eamil.com', 'firstLast45');

    expect(engineer.getRole()).toEqual("Engineer");
});