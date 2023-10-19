import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="w-auto">
      <nav className="flex justify-between p-4">
        <a className="text-2xl" href="#">
          Hello Vijay 👋,
        </a>
        <span className="rounded-md bg-white pr-5">
          <SearchIcon />
          <input placeholder="Search" className="outline-none p-1" />
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
