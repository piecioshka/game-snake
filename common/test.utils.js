'use strict';

let { getRandomInteger, isInteger } = require('./utils');

describe('utils', () => {
    describe('getRandomInteger', () => {
        it('should return integer between range', () => {
            let randomInteger = getRandomInteger(3, 5);
            expect(randomInteger).toBeGreaterThan(2);
            expect(randomInteger).toBeLessThan(6);
        });
    });
    describe('isInteger', () => {
        it('should return true for good values', () => {
            expect(isInteger(0)).toBeTruthy();
            expect(isInteger(2)).toBeTruthy();
            expect(isInteger(1190230)).toBeTruthy();
        });

        it('should return false for not valid values', () => {
            expect(isInteger(NaN)).toBeFalsy();
            expect(isInteger(Infinity)).toBeFalsy();
            expect(isInteger(null)).toBeFalsy();
            expect(isInteger('foo bar')).toBeFalsy();
        });
    });
});
