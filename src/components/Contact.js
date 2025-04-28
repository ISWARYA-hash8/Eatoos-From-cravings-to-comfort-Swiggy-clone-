const Contact = () =>{
    return (
    <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
        <form>
            <input 
            type = "text" 
            className="border border-black p-2 m-2  rounded-lg " 
            placeholder="Name"/>
            <br/>
            <input type="text" 
            className="border m-2 border-black rounded-lg p-2"    
             placeholder="Message" />
            <br/>
            <button 
            className="border border-black m-2 bg-gray-100 rounded-lg px-2 py-2" >Submit</button>
        </form>
    </div>


    
    )
}

export default Contact;