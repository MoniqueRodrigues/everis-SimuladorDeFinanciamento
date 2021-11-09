'use strict';

/**
 * Verifica se um CEP está ou não com máscara.
 *
 * @param {String} cep
 *
 * @return {Bool}
 */
exports.isMasked = function(cep)
{
    cep = String(cep).trim();

    return RegExp(/^[0-9]{5}-[0-9]{3}$/).test(cep);
};

/**
 * Aplica a máscara num CEP.
 *
 * @param {String} cep
 *
 * @return {String}
 */
exports.mask = function(cep)
{
    cep = String(cep).trim();

    if (cep.length !== 8) {
        return cep;
    }

    return cep.substring(0, 5) + '-' + cep.substring(5, 8);
};

/**
 * Remove máscara de um CEP.
 *
 * @param {String} cep
 *
 * @return {String}
 */
exports.unMask = function(cep)
{
    cep = String(cep).trim();

    return cep.replace(/(\-)/g, '');
};
