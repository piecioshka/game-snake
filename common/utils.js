'use strict';

let Utils = {
    getRandomInteger(from, to) {
        return Math.round(Math.random() * (to - from) + from);
    },
    isInteger(number) {
        return parseInt(number) === number;
    }
};

if (typeof module === 'object' && module.exports) {
    module.exports = Utils;
} else {
    window.Utils = Utils;
}
