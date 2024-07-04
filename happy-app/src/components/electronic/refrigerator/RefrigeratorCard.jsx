const RefrigeratorCard = ({refrigerator})=>{

    return (
        <div className="card" style={{width: "18rem"}}>
            <img alt="img" className="card-imo-top" src={refrigerator.image} style={{height: "300px"}}/>
            <div className="card-body">
            <h5 className="card-title">{refrigerator.brand} {refrigerator.model}</h5>
            <h5 className="card-subtitle">&#8377; {refrigerator.price}</h5>
        </div>
        </div>
        
    )
}


export default RefrigeratorCard;