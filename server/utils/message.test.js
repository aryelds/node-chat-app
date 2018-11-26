let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Maria';
        let text = 'Some message';
        let res = generateMessage(from, text);

        expect(typeof res.createdAt).toBe('number');
        expect(res).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
        let from = 'Jen';
        let lat = 1;
        let lng = 2;
        let url = `https://www.google.com/maps?q=1,2`;
        let message = generateLocationMessage(from, lat, lng);

       expect(typeof message.createAt).toBe('number');
       expect(message).toMatchObject({from,url});
   });
});