import React, { useState } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import KeyIcon from "@mui/icons-material/Key";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Sidebar() {
  //   const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    {
      id: 1,
      text: "Dashboard",
      icon: <KeyIcon style={{ color: "white" }} />,
      route: "/",
      selected: true,
    },
    {
      id: 2,
      text: "Income",
      icon: <PaidIcon style={{ color: "white" }} />,
      route: "/income",
      selected: false,
    },
    {
      id: 3,
      text: "Customer",
      icon: <Inventory2Icon style={{ color: "white" }} />,
      route: "/customer",
      selected: false,
    },
    {
      id: 4,
      text: "Product",
      icon: <SupportAgentIcon style={{ color: "white" }} />,
      route: "/product",
      selected: false,
    },
    {
      id: 5,
      text: "Help",
      icon: <HelpOutlineIcon style={{ color: "white" }} />,
      route: "/help",
      selected: false,
    },
  ];
  //   const handleItemClick = (item) => {
  //     setSelectedItem(item);
  //   };

  return (
    <div className="w-64 bg-blue-900 text-white p-3 h-auto transition-all duration-100 ease-in-out">
      <nav className="navigation">
        <a href="#" className="flex justify-center items-center p-5">
          <DashboardIcon style={{ color: "white" }} />
          <span className="nav-link-text text-2xl pl-2 pb-1 text-white">
            Dashboard
          </span>
        </a>
        {items.map((item) => (
          <li
            key={item.id}
            className={`p-4 gap-y-11 cursor-pointer flex items-center justify-between ${
              item.selected ? "bg-slate-500 rounded-lg" : ""
            }`}
          >
            <div className="flex items-center">
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </div>
            <ArrowForwardIosIcon />
          </li>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
