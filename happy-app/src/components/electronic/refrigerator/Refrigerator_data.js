import Haier from './images/Haier.png'
import LG from './images/LG.webp'
import Whirlpool from './images/Whirlpool.jpg'
const refrigerators = [
    {

   
    id:1,
    model: "HRB 738BG",
    brand: "Haier",
    price: 139990.00,
    specification:{
        SKU: 'HRB738BG',
        capacity: '712L',
        type: 'Side by Side',
        noofdoor: 4,
        countryoforigin: 'China'
    },

     image: Haier
    },

    {   
        id:2,
        model: "GL-N292DDSY",
        brand: "LG",
        price: 183450.00,
        specification:{
            SKU: 'GLN292DDSY',
            capacity: '242L',
            type: 'Frost Free',
            noofdoor: 'double Door',
            countryoforigin: 'South Korea'
        },
    
         image: LG
        },

        {   
            id:3,
            model: "215IMPROPRM3SCIZ ",
            brand: "Whirlpool",
            price: 14100.00,
            specification:{
                SKU: '215IMPROPRM3SCIZ',
                capacity: '192L',
                type: 'Direct Cool',
                noofdoor: 'Single Door',
                countryoforigin: 'USA'
            },
        
             image: Whirlpool
            }
]

export default refrigerators;