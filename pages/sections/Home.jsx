import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <section name="home">
      <div
        id="hero-background"
        className="flex items-center align-center justify-center h-9xl bg-fixed bg-center bg-cover pt-4"
      >
        <div className="flex flex-col uppercase absolute justify-center text-center items-center font-light">
          <h1 className="text-6xl	text-white tracking-0.08 pb-8 font-light">
            Hi I&apos;m Kenny
          </h1>
          <p className="capitalize text-white pb-8 font-body">
            Software Engineer &amp; Web Developer
          </p>
          <a name="arrow" href="#about">
            <FaChevronDown className="text-white font-extrabold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
