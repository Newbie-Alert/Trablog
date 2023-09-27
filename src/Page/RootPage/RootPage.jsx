import React from "react";
import Header from "../../Comp/Header/Header";
import { Outlet } from "react-router";

import TokenStorage from "../../customModules/tokenStorage.js";

const tokenStorage = new TokenStorage();

export default function RootPage() {
  return (
    <div>
      <Header tokenStorage={tokenStorage} />
      <Outlet />
    </div>
  );
}
