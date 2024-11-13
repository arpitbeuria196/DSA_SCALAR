 const readline = require('readline');

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

const countFcator = (val)=>
{
    let count=0;

    for(let i=1;i<=val;i++)
    {
        if(val%i == 0)
        {
            count++;
        }
    }
    return count;
}
rl.question('Enter A Number:',(ip)=>
{
    const val = parseInt(ip);
    console.log(`Number Of Factors: ${countFcator(val)}`);
    rl.close();
})


