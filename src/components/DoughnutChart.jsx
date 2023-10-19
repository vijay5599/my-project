import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

export const data = {
  // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "red",
        "blue",
        "yellow",
        "transparent",
        "transparent",
        "transparent",
      ],
      borderWidth: 0,
    },
  ],
};

export function DoughnutChart() {
  return (
    <div className="flex-none w-3/12 h-auto bg shadow-xl rounded-xl px-4 bg-white mt-6 mr-6">
      <h1 className="text-2xl font-bold text-left">Customers</h1>
      <p className="text-sm text-gray-600 font-semibold">
        Customers that buy products
      </p>
      <div className="absolute block items-center justify-center mt-20 ml-[89px]">
        <h1 className="text-4xl font-bold flex justify-center">65%</h1>
        <p className="font-semibold text-gray-700 text-sm">
          Total New<br></br> Customers
        </p>
      </div>
      <Doughnut data={data} className="p-4" />
    </div>
  );
}
