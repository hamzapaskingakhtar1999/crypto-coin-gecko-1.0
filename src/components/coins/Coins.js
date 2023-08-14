import React from "react";
import CoinsItem from "./CoinsItem";
import "./Coins.scss";

import Coin from "../../routes/Coin";

import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24H</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Market Cap</p>
      </div>
      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinsItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
