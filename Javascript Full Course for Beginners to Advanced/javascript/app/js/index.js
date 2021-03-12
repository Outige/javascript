/* styling */
require('styles/main.scss');
import { call } from 'file-loader';
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Map | Filter | Reduce')
/* coding examples */

class Person {
    constructor() {

    }

    static cough() {
        log('cough');
    }
}
Person.cough();