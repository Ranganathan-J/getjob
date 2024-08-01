import React from "react";
import Footer from "./Components/Footer/Footer";
import JobContainer from "./Components/JobContainer/JobContainer";
import NavBar from "./Components/NavBar/NavBar";
import SearchComp from "./Components/SearchComp/SearchComp";
import ValueComp from "./Components/ValueComp/ValueComp";

function App() {
  return (
    <div className="w-full sm:w-[85%] m-auto bg-white">
      <NavBar />
      <SearchComp />
      <JobContainer />
      <ValueComp />
      <Footer />
    </div>
  );
}

export default App;
