const LaptopCard = ({laptop})=>{

    return (
        <div className="card" style={{width: "18rem"}}>
            <img alt="img" className="card-imo-top" src={laptop.image} style={{height: "500px"}}/>
            <div className="card-body">
            <h5 className="card-title">{laptop.brand} {laptop.model}</h5>
            <h5 className="card-subtitle">&#8377; {laptop.price}</h5>
        </div>
        </div>
        
    )
}


export default LaptopCard;