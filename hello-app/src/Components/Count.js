const Count = ()=>{

    let counter = 0;

    //event handler
    const handleClick = ()=>{
        counter = counter + 1;
        console.log(counter)
    }

    return <button onClick={handleClick}>{counter}</button>
}

export default Count;