import cars from "../Database/car_data"
import CarItem from "./CarItem"

const CarTable = ()=>{

        const carItemRows = cars.map( carOb => <CarItem key={carOb.model} car={carOb}/>);
        const tataCars = cars.filter(car => car.brand==='Tata');
        //const tataCarItemRows = tataCars.map(car=><CarItem car={car} />)
        
        const marutiSuzukiCars = cars.filter(car => car.brand==='Maruti Suzuki');
        //const marutiCarItemRows = marutiSuzukiCars.map(car=><CarItem car={car}/>) 
        return (
            <div>
                 <table>
                <thead>
                    <tr>
                        <th>Car Model</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {carItemRows}
                </tbody>
             </table>
            {/* <table>
                <thead>
                    <tr>
                        <th>Car Model</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tataCarItemRows}
                </tbody>
            </table> */}
            {/* <table>
                <thead>
                    <tr>
                        <th>Car Model</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {marutiCarItemRows}
                </tbody>
            </table>  */}
            </div>
        )
    }


export default CarTable;