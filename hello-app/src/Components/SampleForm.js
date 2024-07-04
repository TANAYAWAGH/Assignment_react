const SampleForm = ()=>{

    // event handler to submit form
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form sunmitted");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter Your Name"/>
            <button>Submit</button>
        </form>
    )
}

export default SampleForm