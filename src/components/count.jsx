import React, {useState} from 'react';

const countTimer=()=>{

    const [count, setCount]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{
    setCount((prevCount)=>prevCount+1);

}, 1000);

return()=>{
    clearInterval(interval);
}


},[]);


return(<div>
    <p>count</p>
<p>count:{count}</p>
</div>)


}

export default countTimer;