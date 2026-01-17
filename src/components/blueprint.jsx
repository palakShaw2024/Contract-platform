import { useState } from "react";



function BluePrint({  blueprints, setblueprints }) {
    const [name, setName] = useState("");
    const [fields, setFields] = useState([]);

    console.log({name, fields});

    const saveblueprint = () => {
        if (!name || fields.length === 0) {
            alert("Blueprint needs a name and at least one field to work with.");
            return;
    }

    const newBlueprint = {
        id: Date.now(),
        name,
        fields
    };

    setblueprints([...blueprints, newBlueprint]);

    setName("");
    setFields([]);

    alert("Blueprint saved successfully!");
    }

    return (
    <>
      <div className="container">
        <h2>BluePrint Creation Page</h2>
         <h4>hey there!</h4>
            <p>Lets get started with the BluePrint</p>

         <input type="text"
          placeholder="Enter BluePrint Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />

          <h3>fields</h3>
          {fields.map((f, index) => (
        <div key={f.id}>
          <input
            type="text"
            placeholder="Field Label"
            value={f.label}
            onChange={(e) => {
              const newFields = [...fields];
              newFields[index].label = e.target.value;
              setFields(newFields);
            }}
          />
          <select 
            value={f.type}
            onChange={(e) => {
              const newFields = [...fields];
                newFields[index].type = e.target.value;
                setFields(newFields);
            }}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="checkbox">Checkbox</option>
            <option value="signature">Signature</option>
          </select>  
          </div>
           ))}
           <button onClick={() => setFields([...fields, {id : Date.now(), label: "", type:"text"}])}>Add Field</button>   
           {/* <button onClick={() => {alert(`Blueprint Saved! \n Name: ${name} \n fields: ${JSON.stringify(fields)}`)}}>Save Blueprint</button>     */}
           <button onClick={saveblueprint}>Save Blueprint</button>
      </div>
   
    </>
  );
  };

export default BluePrint;