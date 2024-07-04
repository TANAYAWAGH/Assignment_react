export default function AlertButton(){

    // event handler function
   /*  function handleClick(){
        alert("You Clicked...")
    }
 */

    // event handler function as arrow function
    const handleClick = (e)=>{
        e.stopPropagation(); // to prevent from propagation to parent
        alert(`You have clicked button ${e.target}`)
    }

     return <button onClick={handleClick}>Click Me</button>
    
     /*  return <button  onClick={ function(){
        alert("Inline Event Handler")
    } }>Click Here</button>*/
 

   /* return <button onClick={ ()=>alert("Arrow function inline event handler")}>Click to see</button>*/
}
