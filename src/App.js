import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import { useState } from "react";
import Auth from "./Components/Auth/Auth";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Header />
      <Main data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
// <Auth data={data} setData={setData} />
