import Motorola_edge from './Images/Motorola_edge.webp'
import Vivo_V30e from './Images/Vivo_V30e.webp'
import realme from './Images/realme.webp'
const mobiles = [
    {

   
    id:1,
    model: "Edge 50 Fusion",
    brand: "Motorola",
    price: 25894.00,
    specification:{
        camera:{
            primary: '50 Mp + 13 Mp',
            front: '32 Mp'
        },
        Storage: '128 GB',
        ram: '8 GB'
    },

     Image: Motorola_edge
    },

    {   
        id:2,
        model: "V30e",
        brand: "Vivo",
        price: 27999.00,
        specification:{
            camera:{
                primary: '50 Mp + 8 Mp',
                front: '50 Mp'
            },
            Storage: '128 GB 1 TB Expandable',
            ram: '8 GB'
        },
    
         Image: Vivo_V30e
        },

        {   
            id:3,
            model: "P1",
            brand: "realme",
            price: 15990.00,
            specification:{
                camera:{
                    primary: '50 MP + 8 MP + 64 MP',
                    front: '32 MP'
                },
                Storage: '128 GB 1 TB Expandable',
                ram: '6 GB'
            },
        
             Image: realme
            }
]

export default mobiles;