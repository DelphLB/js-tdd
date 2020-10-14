const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('capitalize first letter in a string', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });
    it('transform a letter', () => {
        assert.strictEqual(capitalizeFirstLetters('i'), 'I');
    });
    it ("pass the test with an empty space", () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });

});