import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Edit = () => {

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
        getData();

    },[])

    const handleUpdate = async(id) => {
        const data = [id: id, name: name, price: price]
        const response = await fetch(`https://localhost:7034/Update/${id}`, {
            method: "put",
            body: response.data(),
            headers: {"Content-Type": "application/json"}
        })

    }

  return (
    <div>
        <div>
            <form>
                Id
            <input disabled type='number' value={id} />
            </form>
            
            <form>
                Name
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </form>
    
            <form>
                Price
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
            </form>
    
            <button type='submit' onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}

export default Edit