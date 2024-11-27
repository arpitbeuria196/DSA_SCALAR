const A= [1,5,7,1]
const B = [7,8,8,8]

const combined = A.map((value,index)=> [value,B[index]]);

combined.sort((a,b)=>a[1]-b[1])

const stack = [];

stack.push(combined[0]);
let count =1;

for(let i=1;i<combined.length;i++)
{
    if(combined[i][0]>=stack[stack.length-1][1])
    {
        stack.push(combined[i]);
        count++;
    }
}

console.log(stack.length);