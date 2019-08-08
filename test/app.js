const assert = require('chai').assert;
const P = require('../app');


describe('Test Factorial',function(){

it('Checking Factorial ....', function(){

assert(P(3)===6);
});

it('Verifying Factorial for -ve Number ....',function(){
assert(P(-10).toString()==='Sorry we cannot calculate the factorial of');
});

it('Verifying Factorial for 0 ....',function(){
assert(P(0)===1);
});

});

