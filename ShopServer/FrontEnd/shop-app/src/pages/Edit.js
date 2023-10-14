import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Edit = () => {

    let {lessonid} = useParams();

    const [user, setUser] = useState([]);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const getData = async () => {
        const response = await fetch(`https://localhost:7034/GetById/${lessonid}`);
        const data = await response.json();
        setUser(data)
    }

    useEffect( () => {
        getData();
        // const response = fetch(`https://localhost:7034/GetById/${lessonid}`);
        // const data = response.json();
        // setUser(data)
    },[])

    // const handleUpdate = async(id) => {
    //     const response = await fetch(`https://localhost:7034/Update/${id}`, {
    //         method: "put",
    //         body: response.json(),
    //         headers: {"Content-Type": "application/json"}
    //     })
    //     const data = await response.json();
    //     setUsers(data)
    // }

  return (
    <div>
        <div>
            <form>
                Id
            <input type='number' value={id} />
            </form>
            
            <form>
                Name
                <input type='text' value={name} />
            </form>
    
            <form>
                Price
                <input type='number' value={price} />
            </form>
    
            {/* <button type='submit' onClick={handleUpdate}>Update</button> */}
        </div>
    </div>
  )
}

export default Edit