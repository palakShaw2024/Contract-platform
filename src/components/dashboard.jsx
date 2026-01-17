function Dashboard({ contracts = [] , setPage, setSelectedContract}){
    return (
    <>
      <div className="container">
        <h2>Dashboard</h2>
      <h4 color=" #646cff">hey there!</h4>

      {contracts.length === 0 && <p>No Contracts Yet</p>}

      {contracts.map((c) => (
        <div key={c.id}
        style = {{border: "1px solid black", margin: "10px", padding: "10px"}}>
            <h4>{c.name}</h4>
            <p>Blueprint: {c.blueprintName}</p>
            <p>status: {c.status}</p>
            <p>Created: {c.createdAt}</p>

            <button onClick={() => {
                setSelectedContract(c);
                setPage("VIEW")
            }}>view</button>
        </div>
            
      ))}
      </div>
    </>
  );
}

export default Dashboard;
{/* <strong>{bp.name}</strong> - {bp.fields.length} fields */}
// excluded the code as bluprint is to be printed here