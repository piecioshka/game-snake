'use strict';

let { getRandomInteger } = require('./utils');

describe('utils', () => {
    describe('getRandomInteger', () => {
        it('should return integer between range', () => {
            let randomInteger = getRandomInteger(3, 5);
            expect(randomInteger).toBeGreaterThan(2);
            expect(randomInteger).toBeLessThan(6);
        });
    });
});
