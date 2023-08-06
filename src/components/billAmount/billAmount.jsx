import React, {useState} from 'react';

const BillApilt=()=>{

const [totalAmount, setTotalAmount]=useState(0);
const [numberOfPeople, setNumberOfPpl]=useState(1);
const [tippercentage, setTipPercentage]=useState(0);
const [splitAmount, setSplitAmount]=useState(0);
const [tipAmountfinal, setTipAmount]=useState(0);

const handleTotalAmountChange=(event)=>{
console.log('handleTotalAmountChange', event)
setTotalAmount(parseFloat(event.target.value));

}


const handleNumberOfPeople=(event)=>{
    console.log('handleNumberOfPeople', event);
    setNumberOfPpl(parseFloat(event.target.value));
    
    }

    const handleTipPercentage=(event)=>{
        console.log('handleTipPercentage', event);
        setTipPercentage(parseFloat(event.target.value));
        
        }

        const calculateSpliAmount=(event)=>{
            console.log('calculateSpliAmount', event);

            const tipAmount=(totalAmount*tippercentage/100);
            setTipAmount(tipAmount);
            const totalgivingtip=totalAmount+tipAmount;
            const splitAmount=totalgivingtip/numberOfPeople;
            setSplitAmount(splitAmount);
            
            }


return (<div>
<h1>Spliting bill amount</h1>
<label>Total Amount:</label>
<input type="number" value={totalAmount} onChange={handleTotalAmountChange} />

<label>number of people:</label>
<input type="number" value={numberOfPeople} onChange={handleNumberOfPeople}/>

<label>tip percentage:</label>
<input type="number" value={tippercentage}  onChange={handleTipPercentage}/>

<label>split amount</label>
<button onClick={calculateSpliAmount}>calculate</button><br></br>
<span>Total Amount: {totalAmount}</span><br/>

<span>Split Amount: {splitAmount}</span><br/>



<span>Tip Amount: {tipAmountfinal}</span>
</div>)

}

export default BillApilt;