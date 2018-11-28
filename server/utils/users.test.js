const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mariana',
            room: 'Eletronic'
        }, {
            id: '2',
            name: 'Maria',
            room: 'React'
        }, {
            id: '3',
            name: 'Pedro',
            room: 'React'
        }];
    });

   it('should add new user', () => {
       let users = new Users();
       let user = {
           id: 123,
           name: 'Joao',
           room: 'Billions Fans'
       };
       let resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([user]);
   });

   it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
   });

    it('should not remove user', () => {
        let userId = '10000';
        let user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let userId = '1';
        let user = users.getUser(userId);

        expect(user.id).toEqual(userId);
    });

    it('should not find user', () => {
        let userId = '11';
        let user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for React', () => {
        let userList = users.getUserList('React');

        expect(userList).toEqual(['Maria', 'Pedro']);
    });

   it('should return names for Eletronic', () => {
        let userList = users.getUserList('Eletronic');

        expect(userList).toEqual(['Mariana']);
   });
});