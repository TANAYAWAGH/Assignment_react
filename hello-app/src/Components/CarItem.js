const CarItem = ({car})=>{ // Form of object distructuring

    return <tr>
        <td>{car.model}</td>
        <td>{car.brand}</td>
        <td>{car.price}</td>
    </tr>

}
export default CarItem;

// comment to test github working
// second line