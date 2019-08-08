const chalk = require('chalk');

 function factorial(n){

if(n<0){
return chalk.red('Sorry we cannot calculate the factorial of ')+`${n}`;
}

 else if (n=== 0) 
      return 1;

else
return (n*(factorial(n-1)));

};


console.log(factorial(-12));

module.exports=factorial;



