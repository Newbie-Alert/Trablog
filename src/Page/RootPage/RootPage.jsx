import React from "react";
import Header from "../../Comp/Header/Header";
import { Outlet } from "react-router";

export default function RootPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
