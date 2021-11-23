import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Table from "./components/table";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
