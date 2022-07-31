import "./App.css";
import PeriodicTable from "./components/PeriodicTable/PeriodicTable.component";

function App() {
  return (
    <div className="app__container">
      <header className="app__header">
        <h1>Periodic Table</h1>
      </header>
      <PeriodicTable />
    </div>
  );
}

export default App;
