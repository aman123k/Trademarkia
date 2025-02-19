import React, { useContext } from "react";
import Header from "./components/Header";
import FilterSec from "./components/FilterSec";
import TrademarkDataDisplay from "./components/Trademark";
import { TrademarkContext } from "./context/TrademarkContext";
import RenderPagination from "./components/RenderPagination";

function App() {
  const { menuOpen } = useContext(TrademarkContext);
  return (
    <div
      className={`bg-[#EBF1FF] flex flex-col ${
        menuOpen ? "max-[650px]:h-screen overflow-scroll" : ""
      }`}
    >
      <Header />
      <div className=" flex flex-col relative">
        <FilterSec />
        <TrademarkDataDisplay />
      </div>
      <RenderPagination />
    </div>
  );
}

export default App;
