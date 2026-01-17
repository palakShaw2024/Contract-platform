// code is left simple to clearly understand the flow an d demonstrate state management and component interaction


import { useState } from "react";
import { useEffect} from 'react';
import Dashboard from "./components/dashboard.jsx";
import Creator from "./components/creator.jsx";
import ContractView from "./components/view.jsx";
import BluePrint from "./components/blueprint.jsx";

function App() {
  // for data storage
  useEffect(() => {
    const savedBlueprints = JSON.parse(localStorage.getItem("blueprints")) || [];
    const savedContracts = JSON.parse(localStorage.getItem("contracts")) || [];

    setblueprints(savedBlueprints);
    setContracts(savedContracts);
  }, []);

  const [page, setPage] = useState("DASHBOARD");
  const [blueprints, setblueprints] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState([]);

  useEffect(() => {
    localStorage.setItem("blueprints", JSON.stringify(blueprints));
  }, [blueprints]);

  useEffect(() => {
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  // later wanna add FastAPI backend for data persistence and best Practices
  
  return (
    <><div>
      <h1>Contract Management Platform</h1>
      <nav>
         <button onClick={() => setPage("BLUEPRINT")}>BluePrint</button>
        <button onClick={() => setPage("CREATOR")}>Creator</button>
         <button onClick={() => setPage("DASHBOARD")}>Dashboard</button>
        <button onClick={() => setPage("VIEW")}>View Contract</button>
       
      </nav>

      {page === "BLUEPRINT" && (<BluePrint blueprints={blueprints} setblueprints={setblueprints}/>)}
      {page === "DASHBOARD" && (<Dashboard contracts={contracts} setPage={setPage} setSelectedContract={setSelectedContract} />)}
      {page === "CREATOR" && (<Creator blueprints={blueprints} contracts={contracts} setContracts={setContracts}/>)}
      {page === "VIEW" && (<ContractView contract={selectedContract} setPage={setPage}/>)}

      </div>
    </>
  );
  
}

export default App;

