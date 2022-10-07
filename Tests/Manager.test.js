const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('name', 45, 'first.last@eamil.com', 45);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role from getRole', () => {
    const manager = new Manager('name', 45, 'first.last@eamil.com', 45);

    expect(manager.getRole()).toEqual("Manager");
});