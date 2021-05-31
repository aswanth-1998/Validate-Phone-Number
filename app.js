var fs = require('fs');

var input=fs.readFileSync('input.txt').toString().trim().split('\n');

var exp =/^\d{10}$/;

try
{
if(exp.test(input))
{
    console.log('Valid PhoneNumber');
}
else
{
    throw 'Invalid PhoneNumber';
}
}
catch(err)
{
    console.log(err);
}