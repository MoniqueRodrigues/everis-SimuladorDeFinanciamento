# cep-util [![npm](http://img.shields.io/npm/v/node-cep-util.svg)](https://www.npmjs.com/package/node-cep-util) ![Downloads](https://img.shields.io/npm/dm/node-cep-util.svg) [![Build Status](https://secure.travis-ci.org/leonardothibes/node-cep-util.png)](http://travis-ci.org/leonardothibes/node-cep-util) [![Package Quality](http://npm.packagequality.com/shield/node-cep-util.svg)](http://packagequality.com/#?package=node-cep-util) [![License](https://img.shields.io/npm/l/node-cep-util.svg)](LICENSE)

Funções utilitárias para tratamento de CEPs

Pague-me um café
----------------

Se este componente foi útil para você, ou para algum de seus projetos, por favor ajude a apoiar o meu trabalho clicando no botão abaixo e fazendo uma doação via PayPal:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LEYD9Y3VEMPK8&lc=BR&item_name=Leonardo%20Thibes&item_number=node%2dcep%2dutil&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Installation
------------

```bash
npm install node-cep-util --save
```

Examples
--------

* [CEP Mask](#cep-mask)
* [CEP UnMask](#cep-unmask)
* [CEP is Masked](#cep-is-masked)

CEP Mask
--------

```js
const cep = require('node-cep-util');

cep.mask('05010000'); // returns '05010-000'
```

CEP UnMask
--------

```js
const cep = require('node-cep-util');

cep.unMask('05010-000'); // returns '05010000'
```

CEP Is Masked
------------

```js
const cep = require('node-cep-util');

cep.isMasked('05010-000'); // returns TRUE
cep.isMasked('05010000');  // returns FALSE
```

Test and development
--------------------

* Install external dependencies: **``npm install``**
* Run the test suite without coverage: **``npm test``**
* Run the test suite with coverage: **``npm run testdox``**

How to Contribute
-----------------

* Open a pull request or an issue about what you want to implement / change. We're glad for any help!
* Please be aware that we'll only accept fully tested code.

Contributors
------------

 * **Leonardo Thibes <leonardothibes@gmail.com>**

LICENSE
=======

Copyright (c) 2018 Leonardo Thibes

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
