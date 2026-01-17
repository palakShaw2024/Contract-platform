function ContractView({ contract , setPage}){
    if (!contract) {
        return <p>No contract Selected, Please Select One.</p>;
    }
    return (
    <>
      <div className="container">
        <h2>Contract View</h2>
      <h4>hey there!</h4>

      <p><strong>Blueprint:</strong> {contract.blueprintName}</p>
      <p><strong>status:</strong> {contract.status}</p>
      <p><strong>Created:</strong> {contract.createdAt}</p>

      <h3>Fields</h3>
      {contract.fields && contract.fields.map((f, index) => (
        <p key={index}>
            <strong>{f.label}:</strong> {f.value}
        </p>
      ))}

      {contract.status === "CREATED" && ( <button onClick={() => {
        contract.status = "SIGNED";
        setPage("DASHBOARD");
      }}>SIgn Contract</button>)}

      <button onClick={() => setPage("DASHBOARD")}>Back To Dashboard</button>
      {/* after using the dashboard view button , the contract status will change to signed */}
      </div>
    </>
  );
}

export default ContractView;
