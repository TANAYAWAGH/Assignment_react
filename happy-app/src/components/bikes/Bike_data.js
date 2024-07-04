import Splender_plus from './images/Splender_plus.webp'
import Bajaj_Pulsar from './images/Bajaj_Pulsar.webp'
import Royal_Enfield from './images/Royal_Enfield.webp'
import Honda_Active from './images/Honda_Active.webp'
import TVS_Apache from './images/TVS_Apache.webp'
const bikes = [
    {
        id:1,
        model:'Splender Plus',
        brand: 'Hero',
        price: 78286.00,
        specification:{
            cc: 97.2,
            mileage: '80.6kmpl',
            maxTorque: 8.05,
            fuelCapacity: '9.8L'
        },
        image: Splender_plus
    },

    {
        id:2,
        model:'Pulser 125',
        brand: 'Bajaj',
        price: 94957.00,
        specification:{
            cc: 124.4,
            mileage: '51.46 kmpl',
            maxTorque: 8.05,
            fuelCapacity: '9.8L'
        },
        image: Bajaj_Pulsar
    },

    {
        id:3,
        model:'Royal Enfield Classic 350',
        brand: 'Royal Enfield',
        price: 225000.00,
        specification:{
            cc: 349.34,
            mileage: '41.55 kmpl',
            maxTorque: '27 Nm @ 4000 rpm',
            fuelCapacity: '13L'
        },
        image: Royal_Enfield
    },

    {
        id:4,
        model:'Activa 6G',
        brand: 'Honda',
        price: 76234.00,
        specification:{
            cc: 109.51,
            mileage: '50 kmpl',
            maxTorque: '8.90 Nm @ 5500 rpm',
            fuelCapacity: '5.3L'
        },
        image: Honda_Active
    },

    {
        id:5,
        model:'Apache RTR 160',
        brand: 'TVS',
        price: 127000.00,
        specification:{
            cc: 159.7,
            mileage: '47 kmpl',
            maxTorque: '13.85 Nm @ 7000 rpm',
            fuelCapacity: '12L'
        },
        image: TVS_Apache
    }
]

export default bikes;