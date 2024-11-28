A = [3, 8, 7, 5]
B = [3, 1, 7, 19]

/*
    
[1 , 3 ,  2 ,  3, 3]
 0   1   2   3    4

[5  ,6 ,  1,  3,  9] 

0, 1, 2                



*/


const effective = (A,B) =>
{  
    const MOD = 1e9 + 7;
    
    const jobs = A.map((deadline,index)=> [deadline,B[index]]);

    jobs.sort((a,b)=>a[0]-b[0]);

    const minHeap = [];

    let totalProfit =0;

    for(const[deadline,profit] of jobs)
    {
        minHeap.push(profit);
        totalProfit+= profit;

        if(minHeap.length > deadline)
        {
            const smallestElement = Math.min(...minHeap);
            totalProfit -= smallestProfit;
            minHeap.splice(minHeap.indexOf(smallestElement),1);
        }
    }


   
    console.log(totalProfit % MOD);
}

effective(A,B);