'use strict';

const cpf    = require('../index'),
      assert = require('unit.js');

describe('Entry Point', function()
{
    it('Is Masked', function(done)
    {
        let valid = cpf.isMasked('12345-678');
        assert.bool(valid).isTrue();
        done();
    });

    it('Is UnMasked', function(done)
    {
        let valid = cpf.isMasked('12345678');
        assert.bool(valid).isFalse();
        done();
    });

    it('Mask', function(done)
    {
        let masked = cpf.mask('12345678');
        assert.string(masked).isEqualTo('12345-678');
        done();
    });

    it('UnMask', function(done)
    {
        let unMasked = cpf.unMask('12345-678');
        assert.string(unMasked).isEqualTo('12345678');
        done();
    });
});
