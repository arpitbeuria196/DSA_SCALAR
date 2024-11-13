const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

rl.question('Enter an array of integers (space-separated): ', (arrInput) => {
    const arr = arrInput.split(' ').map(Number); 
    
    rl.question('Enter a value: ', (valInput) => {
        const val = parseInt(valInput); 

        if (val > arr.length) {
            console.log('Please enter a valid value and the value should not exceed the array length');
        } else {
            
            console.log(`After Reversing First ${val} Elements: ${reversing(arr, val).join(', ')}`);
        }
        
        rl.close(); 
    });
});

const reversing = (arr,val)=>
{
    let start=0;
    let end= val-1;

    while(start<end)
    {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

