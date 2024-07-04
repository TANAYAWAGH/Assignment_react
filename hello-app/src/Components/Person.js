import './Person.css'
/*
export default function Person(props){

    return <h1 className='Person-info'>Hello {props.name}, you are {props.gender} of {props.age} years old</h1>
}*/
/*
export default function Person(props){

    const personName = props.name;
    const personAge = props.age;
    const PersonGender = props.gender;

    return <h1 className='person-info'>Hey {personName}, your age is {personAge} years and you are {PersonGender}</h1>
}*/

export default function Person({name,age,gender}){   /* object desctructuring*/

    return <h1 className='person-info'>Hello {name}, you are {gender} of {age} years old</h1>
}