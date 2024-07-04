import {useState} from 'react'
const CountState = ()=>{
    //declare state variable as property of react component
    //using react hook - useState()
    // initializing counter state variable to 0 using hook
    const [counter,setCounter] = useState(0)
    const [bkColor,setBKColor] = useState('red')
    const [toggleColor,setToggleColor] = useState(true)

    //event handler - nested function in react component
    const handleClick = ()=>{
        setCounter(counter+1); // only way to update state variable and re-render components
        setToggleColor(!toggleColor)
        let isRedColor = toggleColor;
        /*if(isRedColor){
            setBKColor('red')
        }else{
            setBKColor('cyan')
        }*/

        isRedColor?setBKColor('red'):setBKColor('cyan')    
       
    }
    return <button style={{backgroundColor:bkColor}} onClick={handleClick}>{counter}</button>
}

export default CountState;