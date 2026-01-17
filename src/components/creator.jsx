import { useState } from "react";


function Creator({blueprints, contracts, setContracts}) {
    const [selectedId, setSelectedId] = useState("");
    const [values, setValues] = useState([]);

    const selectedOne = blueprints.find((b) => b.id === Number(selectedId));

    const createcontract = () => {
        if (!selectedOne) return;


        const newContract = {
            id: Date.now(),
            name: selectedOne.name + "contract",
            blueprintId: selectedOne.id,
            blueprintName: selectedOne.name,
            fields: values,
            status: "CREATED",
            createdAt: new Date().toLocaleDateString()
        };

            setContracts([...contracts, newContract]);
            alert("Contract created successfully!");

    };


    return (
    <>
      <div className="container"> <h2>Creation Page</h2>
      <h4>hey there!</h4>

      <select value={selectedId}
      onChange={(e) => {
        const id = e.target.value;
        setSelectedId(id);

        const bp = blueprints.find((b) => b.id === Number(id));
        if (bp) {
            setValues(bp.fields.map((f) => ({...f, value: ""})));
        } 
        else {
            setValues([]);
        }
      }}>

        <option value="">Select One Of The Blueprints</option>
        {blueprints.map(bp => (
            <option key={bp.id} value={bp.id}>
            {bp.name}
            </option>
        ))}

      </select>

      {values.map((f, i) => (
        <div key={f.id}>
          <label>{f.label}</label>
          <input
            type={f.type === "date" ? "date" : "text"}
            onChange={(e) => {
              const copy = [...values];
              copy[i].value = e.target.value;
              setValues(copy);
            }}
          />
        </div>
      ))}

      {selectedOne && ( <button disabled={values.some(v => !v.value)} onClick={createcontract}>Create Contract</button>)}
      </div>
    </>
  );
}

export default Creator;
// creating a contract for the blueprint.
// blueprint -> contract creaton -> contract