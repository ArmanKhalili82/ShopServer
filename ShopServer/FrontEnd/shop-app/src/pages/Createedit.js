import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Createedit = () => {

    

    

        // this is update operator
        
        const navigate = useNavigate();
    
        let {lessonid} = useParams();
    
        const [id, setId] = useState(null);
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
    
        const getData = async () => {
            const response = await fetch(`https://localhost:7034/GetById/${lessonid}`);
            const data = await response.json();
            setId(data.id);
            setName(data.name);
            setPrice(data.price);
        }
    
        useEffect( () => {
            if (lessonid !== "new") {
                
                getData();
            }
    
        },[])
    
        const handleUpdate = async() => {
            
    
            const data = {id: id, name: name, price: price}
            await fetch(`https://localhost:7034/Update/`, {
                method: "put",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            })
    
            navigate("/Table")
    
        }
    

    
        
        // this is create operator
        const handleCreate = async () => {
            const data = {name: name, price: price}
            await fetch("https://localhost:7034/Create", {
                method: "post",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            })

            navigate("/Table")
        }

        const handleSave = async () => {
            if (lessonid !== "new") {
                handleUpdate()
            }

            else {
                handleCreate()
            }
        } 
   


    


  return (
    <div>
        <form>
            Name
            <input type='string' placeholder='Name' onChange={(e) =>setName(e.target.value)} />

            Price
            <input type='number' placeholder='Price' onChange={(e) =>setPrice(e.target.value)} />
            <button type="submit" onClick={handleSave}>Save</button>
            
            
        </form>
    </div>
  )
}

export default Createedit