import Mahindra_Thar from './images/Mahindra_Thar.webp'
import Tata_Punch from './images/Tata_Punch.webp'
import Hyundai_Creta from './images/Hyundai_Creta.webp'
import Maruti_Brezza from './images/Maruti_Brezza.webp'
import Skoda_Kushaq from './images/Skoda_Kushaq.webp'
import Mercedes_Benz from './images/Mercedes_Benz.webp'
const cars = [
    {
        id:1,
        model:'Thar',
        brand: 'Mahindra',
        price: 1700000.00,
        specification:{
            cc: 2184,
            mileage: '9 kmpl',
            maxTorque: '300Nm@1600-2800rpm',
            fuelCapacity: '57L'
        },
        image: Mahindra_Thar
    },

    {
        id:2,
        model:'Punch',
        brand: 'Tata',
        price: 1000000.00,
        specification:{
            cc: 1199,
            mileage: '18.8 kmpl',
            maxTorque: '115Nm@3250+/-100rpm',
            fuelCapacity: '37L'
        },
        image: Tata_Punch
    },

    {
        id:3,
        model:'Creta',
        brand: 'Hyundai',
        price: 2000000.00,
        specification:{
            cc: 1482,
            mileage: '18.4 kmpl',
            maxTorque: '253Nm@1500-3500rpm',
            fuelCapacity: '50L'
        },
        image: Hyundai_Creta
    },

    {
        id:4,
        model:'Brezza',
        brand: 'Maruti',
        price: 1400000.00,
        specification:{
            cc: 1462,
            mileage: '19.8 kmpl',
            maxTorque: '136.8Nm@4400rpm',
            fuelCapacity: '48L'
        },
        image: Maruti_Brezza
    },

    {
        id:5,
        model:'Kushaq',
        brand: 'Skoda',
        price: 1800000.00,
        specification:{
            cc: 1498,
            mileage: '18.86 kmpl',
            maxTorque: '250Nm@1600-3500rpm',
            fuelCapacity: '50L'
        },
        image: Skoda_Kushaq
    },

    {
        id:6,
        model:'Benz GLB 2024',
        brand: 'Mercedes',
        price: 6500000.00,
        specification:{
            cc: 1332,
            mileage: '16 kmpl',
            maxTorque: '400Nm@1600-2600rpm',
            fuelCapacity: '52L'
        },
        image: Mercedes_Benz
    }


]

export default cars;