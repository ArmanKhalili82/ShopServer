import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Mytable = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")

    const handleLoad = async() => {
        const response = await fetch("https://localhost:7034/GetAllPerson")
        const data = await JSON.stringify(response);
        setUsers(data)
    }
    
    useEffect( () => {
        handleLoad();
    },[])

    const handleDelete = async(id) => {
        await fetch(`https://localhost:7034/Delete/${id}`, {method: "DELETE"})
        await handleLoad()
    }

  return (
    <div>
        <h1>This Is My Data Table</h1>

        <button>
            <Link to={"/MYcreateedit/new"}>Create New</Link>
        </button>

        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />

        <table style={{width: '100%', border: "1px solid black"}}>
            {users.filter(u => u.name.includes(search)).map(user =>{
                return (
                    <div>
                        <tr style={{border: "1px solid black"}}>
                            <th style={{border: "1px solid black"}}>Id</th>
                            <th style={{border: "1px solid black"}}>Name</th>
                            <th style={{border: "1px solid black"}}>Family</th>
                            <th style={{border: "1px solid black"}}>Age</th>
                            <th style={{border: "1px solid black"}}>Height</th>
                            <th style={{border: "1px solid black"}}>Weight</th>
                        </tr>
                        
                        <tr style={{border: "1px solid black"}}>
                            <td style={{border: "1px solid black"}}>{user.id}</td>
                            <td style={{border: "1px solid black"}}>{user.name}</td>
                            <td style={{border: "1px solid black"}}>{user.family}</td>
                            <td style={{border: "1px solid black"}}>{user.age}</td>
                            <td style={{border: "1px solid black"}}>{user.height}</td>
                            <td style={{border: "1px solid black"}}>{user.weight}</td>
                        </tr>

                        <tr>
                            <button>
                                <Link to={`/MYcreateedit/${user.id}`}>Edit</Link>
                            </button>

                            <button onClick ={() => handleDelete(user.id)}>Delete</button>
                        </tr>
                    </div>
                )
            })}
        </table>
    </div>
  )
}

export default Mytable