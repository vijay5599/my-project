import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { BarChart } from "../components/Bar";
import { DoughnutChart } from "../components/DoughnutChart";
import BasicTable from "../components/Table";

function Fullpage() {
  return (
    <div className="flex bg-slate-200 w-screen">
      <Sidebar />
      <div className="flex-none">
        <Navbar />
        <Cards />
        <div className="flex h-2/5 justify-between">
          <BarChart />
          <DoughnutChart />
        </div>
        <div>
          <BasicTable />
        </div>
      </div>
    </div>
  );
}

export default Fullpage;
