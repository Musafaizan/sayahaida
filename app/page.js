"use client";
import React  from "react";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <Navbar />
    </div>
  );
}