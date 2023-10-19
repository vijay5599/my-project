import React from "react";
import Dollars from "../assets/images/dollar.png";
import Orders from "../assets/images/notes.png";
import Balance from "../assets/images/shopping-bag.png";
import Wallet from "../assets/images/wallet.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Cards() {
  const items = [
    {
      id: 1,
      text: "Earings",
      icon: Dollars,
      amount: "$198k",
      Profit: "$12",
      color: "bg-green-400",
    },
    {
      id: 2,
      text: "Orders",
      icon: Orders,
      amount: "$50",
      loss: "$2",
      color: "bg-blue-400",
    },
    {
      id: 3,
      text: "Balance",
      icon: Balance,
      amount: "$12.5k",
      loss: "$2",
      color: "bg-cyan-400",
    },
    {
      id: 4,
      text: "Total Sales",
      icon: Wallet,
      amount: "$550k",
      Profit: "$12",
      color: "bg-red-900",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ml-5 mr-5">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 border flex items-center text-left h-32 w-60 border-gray-300 rounded-lg shadow-lg bg-white"
        >
          <div
            className={`p-1 rounded-full w-20 h-20 flex justify-center items-center ${item.color}`}
          >
            <img src={item.icon} alt={item.text} className="w-11 h-11 " />
          </div>
          <div className="ml-2">
            <h2 className="text-sm font-semibold mt-2">{item.text}</h2>
            <p className="relative text-black text-2xl font-bold">
              {item.amount}
            </p>
            {item.Profit ? (
              <p className="text-xs font-semibold">
                <ArrowDownwardIcon
                  style={{ width: "18px", color: "green", marginBottom: "3px" }}
                />
                {item.Profit}% this month
              </p>
            ) : (
              <p className="text-xs font-semibold">
                <ArrowUpwardIcon
                  style={{ width: "17px", color: "red", marginBottom: "3px" }}
                />
                {item.loss}% this month
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
