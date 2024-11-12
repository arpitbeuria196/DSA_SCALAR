let changeCharacter = (A,B)=>
{
    const map = new Map();

    for (const ch of A) 
     {
        if(map.has(ch))
        {
            map.set(ch,map.get(ch)+1)
        }
        else
        {
            map.set(ch,1);
        }
       
    };

    console.log(map);
    const sortedMap = new Map([...map.entries()].sort((a,b)=>a[1]-b[1]));
        for(const [key,value] of sortedMap)
        {
            let currentValue = value
            while(currentValue>0 && B>0)
            {
                currentValue -= 1;
                B--;
                if (currentValue === 0) {
                    sortedMap.delete(key);
                } else {
                    sortedMap.set(key, currentValue);
                }
            }
            if(B==0)
            {
                break;
            }
        }

    console.log(Math.max(sortedMap.size,1));

}

let A = "abcabbccd";
let B = 3;

changeCharacter(A,B);
