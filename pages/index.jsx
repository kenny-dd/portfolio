import Head from "next/head";
import React, { Component } from "react";
// import Home from "./sections/Home";
// import About from "./sections/About";
// import Resume from "./sections/Resume";
// import Experience from "./sections/Experience";
// import Socials from "./sections/Socials";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./sections/Home"), {
  loading: () => "Loading...",
});
const About = dynamic(() => import("./sections/About"));
const Resume = dynamic(() => import("./sections/Resume"));
const Experience = dynamic(() => import("./sections/Experience"));
const Socials = dynamic(() => import("./sections/Socials"));

export class index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Kenny Dang</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Kenny Dang's Personal Portfolio" />
          <link rel="apple-touch-icon" href="/logo192.png" />
        </Head>

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
