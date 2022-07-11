// import Topla from './my-module.js'
// console.log(Topla(2, 4)); my-module.js ' deki 4 ayrı yol için yazım şeklidir.

import {hello, topla} from './my-module.js'
import getData from './app.js'
console.log(topla(2, 4));
console.log(getData);
// hello(); parametresiz halini yazdırma ya da çağırma.
hello('Talip');      // parametreli halini yazdırma ya da çağırma.