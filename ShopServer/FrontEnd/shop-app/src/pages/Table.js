import React, {useState} from 'react'

const Table = () => {

    const [users, setUsers] = useState([]);

    const handleRefresh = async () => {
        const response = await fetch("https://localhost:7034/Lesson")
        const data = await response.json();
        setUsers(data)
    }

  return (
    <div>
        <h1>This Is My Table</h1>
        <button onClick={handleRefresh}>Refresh Table</button>
        <table style={{width: '100%', border: "1px solid black"}}>

            {users.map((user) => {
                return (
                    <div>
                        <tr style={{border: "1px solid black"}}>
                            <th style={{border: "1px solid black"}}>Id</th>
                            <th style={{border: "1px solid black"}}>Name</th>
                            <th style={{border: "1px solid black"}}>Price</th>
                        </tr>

                        <tr style={{border: "1px solid black"}}>
                            <td style={{border: "1px solid black"}}>{user.id}</td>
                            <td style={{border: "1px solid black"}}>{user.name}</td>
                            <td style={{border: "1px solid black"}}>{user.price}</td>
                        </tr>

                        <tr style={{border: "1px solid black"}}>
                            <td style={{border: "1px solid black"}}>{user.id}</td>
                            <td style={{border: "1px solid black"}}>{user.name}</td>
                            <td style={{border: "1px solid black"}}>{user.price}</td>
                        </tr>
                    </div>
                )
            })}

        </table>
    </div>
  )
}

export default Table