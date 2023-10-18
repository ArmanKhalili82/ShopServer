import React from 'react'

const Create = () => {

    const handleCreate = async () => {
        await fetch("https://localhost:7034/Create", {
            method: "post",
            headers: {"Content-Type": "application/json"}
        })
    }

  return (
    <div>
        <form>
            Id
            <input type='number' placeholder='Id' />
        </form>

        <form>
            Name
            <input type='string' placeholder='Name' onChange={(e) => e.target.value} />
        </form>

        <form>
            Price
            <input type='number' placeholder='Price' onChange={(e) => e.target.value} />
        </form>

          <button type='submit' onClick={handleCreate}>Create</button>
    </div>
  )
}

export default Create