const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

rl.question('Enter A Number:',(ip)=>
{
    const val = parseInt(ip);
    console.log(`Number Of Factors: ${ColorfulOrNot(val)}`);
    rl.close();
})

const ColorfulOrNot = (val)=>
{
    const set = new Set();
    const numStr = val.toString();

    let i=0;
    let j=0;

    while(i<numStr.length)
    {
        let product = 1;
        j=i;
        
        while(j<numStr.length)
        {
            product = product * parseInt(numStr[j]);

            if(set.has(product))
            {
                return "It is not a ColorfulNumber";
            }
            j++;
            set.add(product);
        }
        i++;
    }
    return "It is A Colorful Number";

}