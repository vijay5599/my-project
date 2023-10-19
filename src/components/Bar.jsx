import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
      grid: {
        display: false, // Remove x-axis gridlines
      },
    },
    x: {
      grid: {
        display: false, // Remove x-axis gridlines
      },
      ticks: {
        color: "blue", // Change the label color
        font: {
          size: 10, // Change the label font size
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Remove legends
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dataLabels = labels.map(() =>
  faker.datatype.number({ min: 65, max: 70 })
);
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataLabels,
      backgroundColor: dataLabels.map((score) => {
        if (score % 2 == 0) {
          return "blue";
        } else {
          return "grey";
        }
      }),
      borderRadius: 5,
      barPercentage: 0.9, // Adjust the width of the bars
      categoryPercentage: 0.6, // Adjust the gap between bars
    },
  ],
};

export function BarChart() {
  return (
    <div className="flex-none w-8/12 h-auto ml-6 mt-6 bg shadow-xl rounded-xl px-3 py-2 pb-9 bg-white">
      <span className="flex justify-between">
        <p className="ml-4 font-bold">
          Overview
          <p className="text-gray-400 flex text-xs">Monthly earning</p>
        </p>
        <p className="flex text-sm ml-28 mt-1">
          Month
          <KeyboardArrowDownIcon className="ml-1 pb-1" />
        </p>
      </span>
      <Bar options={options} data={data} />
    </div>
  );
}
