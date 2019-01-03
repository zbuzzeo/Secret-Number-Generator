'use strict';
module.exports = function( ) {
    let secretNumber = ( Math.random( ) * 100000 ) + 1;
    function secretNumberGenerator ( ) {
        return secretNumber;

    }
    return secretNumberGenerator;

};