import Component4 from "./Component4";
import { MyContext } from "./Component1";

const Component3 = ()=>{
    return(
        <div className="border border-2 border-primary m-2 p-2 rounded">
        Component3
        <Component4/>

{/* <MyContext.Provider value="This data is from component3">
        <Component4/>
        </MyContext.Provider> */}
        </div>
    )
    
}

export default Component3;