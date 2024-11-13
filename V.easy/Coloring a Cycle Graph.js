const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input:stdin,
    output:stdout
})

rl.question("Enter the Number of Vertices For a Graph:",(ip)=>
{
    const vertices = parseInt(ip);
    console.log(`numberOfVerticesRequiredToColor:${helper(vertices)}`)
    rl.close();
})

const helper = (vertices)=>
{
    if(vertices%2==0)
    {
        return 2;
    }
    else
    {
        return 3;
    }
}