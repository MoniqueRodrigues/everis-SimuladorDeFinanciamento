'use strict';

const decorator = require('../../lib/decorator'),
      assert    = require('unit.js');

const ceps = [
    {
        unMasked: '12345678',
        masked  : '12345-678',
    },
];

describe('Decorator', function()
{
    ceps.forEach(function(cep)
    {
        it('Is Masked: ' + cep.masked, function(done)
        {
            assert.bool(decorator.isMasked(cep.masked)).isTrue();
            done();
        });

        it('Is UnMasked: ' + cep.unMasked, function(done)
        {
            assert.bool(decorator.isMasked(cep.unMasked)).isFalse();
            done();
        });

        it('Mask String', function(done)
        {
            assert.string(decorator.mask(cep.unMasked)).isEqualTo(cep.masked.trim());
            done();
        });

        it('Mask Number', function(done)
        {
            assert.string(decorator.mask(12345678)).isEqualTo(cep.masked.trim());
            done();
        });

        it('Mask Fail', function(done)
        {
            assert.string(decorator.mask('123')).isEqualTo('123');
            done();
        });

        it('UnMask Masked', function(done)
        {
            assert.string(decorator.unMask(cep.masked)).isEqualTo(cep.unMasked.trim());
            done();
        });

        it('UnMask UnMasked', function(done)
        {
            assert.string(decorator.unMask(cep.unMasked)).isEqualTo(cep.unMasked.trim());
            done();
        });
    });
});
