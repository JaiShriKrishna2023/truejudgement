import React, {useEffect, useState} from 'react';



const TestComp=()=>{


useEffect(()=>{

const dataFetch=fetch('https://api.mocki.io/v2/c99bba7e/appData')
                    .then(response=>{
if(!response.ok){
    throw new Error('some error')
}
return response.json();

                    })
                    .then(data=>{
console.log('new Data', data);
                    })
.catch(error=>{
console.log(error.message)

})
  }, [])





    const[count, setCount]=useState(0);

    const[userInput, setUserInput]=useState('');

    const [textColor, setTextColor]=useState('')

    const handleIncrement=()=>{
setCount(count+1);
setTextColor('green');


    }

    const handleDecrement=()=>{
        setCount(count-1);
        setTextColor('red');
        
            }


         const handleUserInput=(event)=>{
const newValue=parseInt(userInput, 10);
if(!isNaN(userInput)){
    setCount(newValue);
    setUserInput('');

}



            }


return(<div>
<input type='number' value={count} onChange={handleUserInput} style={{color:textColor}} className='Increment'/>
<button onClick={handleIncrement} >Increment</button>
<button onClick={handleDecrement}>Decrement</button>
</div>)

}

export default TestComp;
