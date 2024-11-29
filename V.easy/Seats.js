 A = "....x..xx...x.."

 let before =[]
 for(let i=0;i<A.length;i++)
 {
    if(A.charAt(i)=="x")
    {
        before.push(i);
    }
 }

 let count = before.length;
 //if (count === 0) return 0;

 let median = before[Math.floor(count / 2)];

 let target = [];
 let start = median - Math.floor(count / 2);
 for(let i=0;i<before.length;i++)
 {
    target.push(start+i);
 }

 let minStep =0;
 for(let i=0;i<target.length;i++)
 {
    minStep += Math.abs(target[i]-before[i]);
 }


 console.log(median);
 console.log(before);
 console.log(target);
 console.log(start);