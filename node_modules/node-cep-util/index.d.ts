/**
 * Verifica se um CEP está ou não com máscara.
 *
 * @param cep CEP a ser verificado
 */
export var isMasked: (cep: string) => boolean;

/**
 * Aplica a máscara num CEP.
 *
 * @param cep CEP sem máscara
 */
export var mask: (cep: string) => string;

/**
 * Remove máscara de um CEP.
 *
 * @param cep CEP com máscara
 */
export var unMask: (cep: string) => string;
