const MobileCard = ({mobile})=>{

    return (
        <div className="card" style={{width: "18rem"}}>
            <img alt="img" className="card-imo-top" src={mobile.Image} style={{height: "500px"}}/>
            <div className="card-body">
            <h5 className="card-title">{mobile.brand} {mobile.model}</h5>
            <h5 className="card-subtitle">&#8377; {mobile.price}</h5>
        </div>
        </div>
        
    )
}


export default MobileCard;