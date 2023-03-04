import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaChevronDown } from "react-icons/fa";
import React, { Component } from "react";

import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Experience from "./sections/Experience";
import Socials from "./sections/Socials";

export class index extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Experience />
        <Resume />
        <Socials />
      </div>
    );
  }
}

export default index;
