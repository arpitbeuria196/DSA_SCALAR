const fibonacci = (A)=>
{
    let dp = new Array(A);
    dp[0]=0;
    dp[1]=1;

    if(A==0)
        return 0;
    if(A==1)
        return 1;

    for(let i=2;i<=A;i++)
    {
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[A];
}

var A=4
console.log(fibonacci(A));