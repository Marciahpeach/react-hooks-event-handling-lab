// Code Keypad Component Here

function Keypad (){
    function handleChange(e){
        console.log("Entering password...")
    }
    return (
        <div>
           <input type="password" onChange={handleChange} />
        
        </div>
    )
}

export default Keypad;
