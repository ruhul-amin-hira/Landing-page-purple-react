import Package from "./components/Package";
import UpperLayout from "./components/UpperLayout";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  return (
    <div className="main">
      <UpperLayout />
      <Package />
      <Footer />
    </div>
  );
}

export default App;
