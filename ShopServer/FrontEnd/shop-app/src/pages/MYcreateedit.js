import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const MYcreateedit = () => {

  const navigate = useNavigate();
  let {personid} = useParams();

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const getData = async() => {
    const response = await fetch(`https://localhost:7034/Person/GetByPersonId/${personid}`);
    const data = await response.json();
    setId(data.id);
    setName(data.name);
    setFamily(data.family);
    setAge(data.age);
    setHeight(data.height);
    setWeight(data.weight);
  }

  useEffect( () => {
      if (personid == "new") {
        getData();
      }
  }, [])

  const handleUpdate = async() => {
    const data = {id: id, name: name, family: family, age: age, height: height, weight: weight}
    await fetch("https://localhost:7034/Person/UpdatePerson", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })

    navigate("/Mytable")
  }

  const handleCreate = async() => {
    const data = {name: name, family: family, age: age, height: height, weight: weight}
    const response = await fetch("https://localhost:7034/Person/CreatePerson", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })

    if (response.status == 200) {
      handleCreate()
    }

    els

    navigate("/Mytable")
  }

  const handleSave = async() => {
    if (personid !== "new") {
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
          <input value={name} type='string' placeholder='Name' onChange={(e) =>setName(e.target.value)} />

          Family
          <input value={family} type='string' placeholder='Family' onChange={(e) =>setFamily(e.target.value)} />

          Age
          <input value={age} type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} />

          Height
          <input value={height} type='number' placeholder='Height' onChange={(e) => setHeight(e.target.value)} />

          Weight
          <input value={weight} type='number' placeholder='Weight' onChange={(e) => setWeight(e.target.value)} />

          <button type="submit" onClick={handleSave}>Save Data</button>
      </form>
    </div>
  )
}

export default MYcreateedit