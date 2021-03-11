/* styling */
require('styles/main.scss');
import { call } from 'file-loader';
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Map | Filter | Reduce')
/* coding examples */

let arr = [2, 3, 7, 1];

let map = arr.reduce(function(acc, n) {
    return acc+n*2;
});

log(arr);
log(map);