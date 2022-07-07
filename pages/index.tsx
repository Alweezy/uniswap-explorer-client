import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";
import { useMoralis } from "react-moralis";
import React from "react";

const Home: React.FC = () => {
  const { isAuthenticated, logout } = useMoralis();
  return (
    <div className="grid place-items-center h-screen bg-black">
      {isAuthenticated ? <DashBoard /> : <Login />}
    </div>
  );
};

export default Home;
