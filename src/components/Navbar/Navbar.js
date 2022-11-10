import React, { useState } from "react";
import Meals from "../Meals/Meals";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img
              style={{ width: "100px" }}
              src="https://i.ibb.co/XV1jZz7/tarek-large-logo-4.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>

      <Meals searchText={searchText} />
    </div>
  );
};

export default Navbar;
