import FlowerItem from "./FlowerItem";
const flowers = ["Rose","Lotus","Jasmin","Lily","Chapha"]


const FlowerList = ()=>{

    const flowerItemList = flowers.map( a=> <FlowerItem key={a} flower={a}/> );
    
    // filter array of flowers
     const filteredFlowers = flowers.filter(flower=>flower.startsWith('L'))
    //const flowerItemList1 = filteredFlowers1.map(flower=><FlowerItem flower={flower}/>)

    const filteredFlowers1 = flowers.filter(flower=>flower.startsWith('J'))
    //const flowerItemList2 = filteredFlowers2.map(flower=><FlowerItem flower={flower}/>)
    // rendering logic 
    return (
        <> {/* ISX comment - empty element*/}
        <ol>
            {flowerItemList}
        </ol>

        {/* <ol>
            {flowerItemList1}
        </ol>

        <ol>
            {flowerItemList2}
        </ol>  */}
        </>
    )

}

export default FlowerList;