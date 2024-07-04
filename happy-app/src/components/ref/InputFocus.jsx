import {useRef} from 'react';

const InputFocus = ()=>{
    const inputRef = useRef(null)

    const handleClick = ()=>{
        inputRef.current.focus(); // Manipulatoing DOM using refyw
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Click to Focus</button>
        </div>
    )
}

export default InputFocus;
