// import { Route, Routes } from "react-router-dom";
// import { Link } from "react";
// import { useState } from "react";
import UserInfo from "./homecomponent/UserInfo";
import Time from "./homecomponent/Time";
import Newsfeed from "./homecomponent/Newsfeed";

function Home() {

  return (
      <div className="container py-2 my-3 mx-auto">
        <div className="row gy-3 gx-3">
          {/* LEFT PANEL USERINFO AND TIME COMPONENT ********************************** */}
          <div className="col-md-5 shadow border border-1 rounded-2 p-1">
            <UserInfo />
            <Time />    
          </div>
          {/* RIGHT PANEL - NEWS FEED COMPONENT  ****************************************/}
          <Newsfeed />
        </div>
      </div>
  );
}

export default Home;