import React, { useState } from "react";

function Resume() {
  return (
    <section name="resume">
      <div
        id="hero-resume"
        className="flex items-center justify-center h-64 bg-fixed bg-center bg-cover p-3"
      >
        <div className="flex flex-col uppercase absolute items-center font-light">
          <h2 className="text-white text-title tracking-1.5 pb-7 font-light">My Resume</h2>
          <a
            className="text-sm text-white no-underline tracking-1.5 inline-block outline outline-2 outline-white p-resume duration-200 hover:bg-white"
            href="https://kenny-dd.github.io/knd-v1/files/kennydang.pdf"
            target="_blank"
          >
            Click to View
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
