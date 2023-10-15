import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <section className="section">
        <SideBar />
        <Home />
      </section>
    </>
  );
}

export default App;
