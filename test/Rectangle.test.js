const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('is square?', () => {
        assert.ok(new Rectangle (5, 5).isSquare(), true);
    });
    it('is square?', () => {
        assert.ok(new Rectangle (8, 5).isSquare(), false);
    });
    it('area', () => {
        assert.strictEqual(new Rectangle (5, 5).getArea(), 25);
    });
    it('perimetre', () => {
        assert.strictEqual(new Rectangle (5, 5).getPerimeter(), 20);
    });

});