import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Snack from "./Snack";

const VendingMachine = () => {
  const snacks = [
    { name: "Cookies", description: "These are cookies" },
    { name: "Bananas", description: "These are bananas" },
    { name: "Coca-cola", description: "A very sweet, caffeinated beverage!" },
  ];

  return (
    <Router>
      <nav>
        <ul>
          {snacks.map((snack) => (
            <li>
              <Link to={`/${snack.name}`}>{snack.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to the vending machine!</h1>} />
        {snacks.map((snack) => (
          <Route
            path={`/${snack.name}`}
            element={
              <Snack
                name={`${snack.name}`}
                description={`${snack.description}`}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default VendingMachine;
