import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Exemplo de  uso do React Router</h1>
      <Outlet/>
    </div>
  );
}

export default App;