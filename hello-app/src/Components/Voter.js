const Voter=({citizen})=>{

    /* if(citizen.age>=18)
        return <h2 style={{color:'green'}}> Dear {citizen.name}, Eligible for voting</h2>
    else
    return <h2 style={{color:'blue'}}>Hello {citizen.name}, Sorry! Not eligible for voting
    because your age is less than 18 years.</h2>

 */
/* if(citizen.age>=18)
    return <h2 style={{color:"green"}}>Dear {citizen.name}, Eligible for voting</h2>
    else 
    return null; //render nothing by returning null

 */

    /* return (
        citizen.age>=18?<h2 style={{color:"red"}}>Eligible for voting</h2>:<h2
         style={{color:"violet"}}>Sorry! not eligible for voting</h2>
    ) */

    return (
        citizen.age>=18 && <h2 style={{color: "red"}}>Eligible for voting</h2>
    )
}
export default Voter