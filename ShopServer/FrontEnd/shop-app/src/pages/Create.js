import React, {useState} from 'react'

const Create = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleCreate = async () => {
        await fetch("https://localhost:7034/Create", {
            method: "post",
            headers: {"Content-Type": "application/json"}
        })
    }

  return (
    <div>
        <form>
            Name
            <input type='string' placeholder='Name' onChange={(e) =>setName(e.target.value)} />

            Price
            <input type='number' placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        </form>

          <button type='submit' onClick={handleCreate}>Create</button>
    </div>
  )
}

export default Create