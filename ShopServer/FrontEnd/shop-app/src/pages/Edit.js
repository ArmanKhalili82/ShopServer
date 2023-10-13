import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Edit = () => {

    let {lessonid} = useParams();

    const [user, setUser] = useState([]);

    useEffect(async (lessonid) => {
        const response = await fetch(`https://localhost:7034/GetById/${lessonid}`);
        []
    })

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
                    <input type='number' placeholder='Id'>
                        {user.id}
                    </input>
                    </form>
            
                    <form>
                        Name
                        <input type='text' placeholder='Name'>
                            {user.name}
                        </input>
                    </form>
            
                    <form>
                        Price
                        <input type='number' placeholder='Price'>
                            {user.price}
                        </input>
                    </form>
            
                    <button type='submit' onClick={handleUpdate}>Update</button>
                </div>
    </div>
  )
}

export default Edit