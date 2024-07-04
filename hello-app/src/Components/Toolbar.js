import AlertButton from "./AlertButton"

// React component in the from arrow function
const Toolbar = ()=>{

    // event handler function in toolbar component
    const handleToolbarClick = ()=>{
        alert("You Clicked Toolbar");
    
    }

    return (
        <div style={{backgroundColor: 'pink', color: 'blue'}} onClick={handleToolbarClick}>
            <AlertButton/>
        </div>
    )
}

export default Toolbar