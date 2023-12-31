import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const Table = () => {

    const [users, setUsers] = useState([]);

    const handleRefresh = async () => {
        const response = await fetch("https://localhost:7034/GetAll")
        const data = await response.json();
        setUsers(data)
    }

    const [search, setSearch] = useState("")

    const handleDelete = async (id) => {
        await fetch(`https://localhost:7034/Delete/${id}/force`, {method: 'DELETE'})
        await handleRefresh()
    }

  return (
    <div>
        <h1>This Is My Table</h1>
        <button onClick={handleRefresh}>Refresh Table</button>
        
        <button>
            <Link to={'/Createedit/new'}>Create New Lesson</Link>
        </button>

        <table style={{width: '100%', border: "1px solid black"}}>

        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />

            {users.filter((user) => {
                return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search);
            }).map((user) => {
                return (
                    <div>
                        <tr style={{border: "1px solid black"}}>
                            <th style={{border: "1px solid black"}}>Id</th>
                            <th style={{border: "1px solid black"}}>Name</th>
                            <th style={{border: "1px solid black"}}>Price</th>
                            <th style={{border: "1px solid black"}}>Gender</th>
                            <th style={{border: "1px solid black"}}>Role</th>
                            <th style={{border: "1px solid black"}}>Level</th>
                        </tr>

                        <tr style={{border: "1px solid black"}}>
                            <td style={{border: "1px solid black"}}>{user.id}</td>
                            <td style={{border: "1px solid black"}}>{user.name}</td>
                            <td style={{border: "1px solid black"}}>{user.price}</td>
                            <td style={{border: "1px solid black"}}>{user.gender? "Male": "Female"}</td>
                            <td style={{border: "1px solid black"}}>{user.role}</td>
                            <td style={{border: "1px solid black"}}>{user.level}</td>
                        </tr>

                        <tr>
                            <button>
                                <Link to={`/Createedit/${user.id}`}>Edit</Link>
                            </button>

                            <button onClick={() => handleDelete(user.id)}>Delete</button>

                            
                        </tr>
                        

                    </div>
                )
            })}
            

        </table>
    </div>
  )
}

export default Table