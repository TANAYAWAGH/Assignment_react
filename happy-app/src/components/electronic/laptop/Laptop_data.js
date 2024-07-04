import Asus from './images/Asus.webp'
import HP_ZBook from './images/HP_ZBook.webp'
import Acer_Predator from './images/Acer_Predator.webp'
const laptops = [
    {

   
    id:1,
    model: "S UX391UA-XB71-R",
    brand: "Asus ZenBook",
    price: 152679.00,
    specification:{
        performance: 'Core i7 8th Gen 1.8 Ghz',
        camera: '1920 x 1080 pixels',
        storage: '256 GB SSD',
        ram: '8 GB',
        battery: 'LI-Po 4 Cell 13.5 Hrs'
    },

     image: Asus
    },

    {   
        id:2,
        model: "15v G5",
        brand: "HP ZBook",
        price: 183450.00,
        specification:{
            performance: 'Core i7 8th Gen2.2 Ghz',
            camera: '1920 x 1080 pixels',
            storage: '2 TB HDD SATA 5400 RPM',
            ram: '16 GB DDR4 RAM4 GB Graphics',
            battery: 'Li-Ion'
        },
    
         image: HP_ZBook
        },

        {   
            id:3,
            model: "17 X GX-792-7448 ",
            brand: "Acer Predator",
            price: 159020.00,
            specification:{
                performance:'Core i7 7th Gen1.6 Ghz',
                camera:'1920 x 1080 pixels',
                Storage: '128 GB 1 TB Expandable',
                ram: '16 GB DDR4 RAM8 GB Graphics',
                battery:'Li-Ion8 Cell3 Hrs'
            },
        
             image: Acer_Predator
            }
]

export default laptops;