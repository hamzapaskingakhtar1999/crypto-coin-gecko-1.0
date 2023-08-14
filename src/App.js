import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/coins/Coins";
import Navbar from "./components/navbar/Navbar";

import Coin from "./routes/Coin";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
        console.log("NOT WORKING");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Coins coins={coins} />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </>
  );
};

export default App;
