import React, { lazy } from "react";
import Image from "next/image";
import benchPic from "../../public/assets/bench-photo.webp";
import { BsCpu, BsJoystick, BsKeyboard } from "react-icons/bs";
import Summary from "../../components/Summary";

const About = () => {
  const iconFormat = "w-12 h-12 mb-2";

  const summary = [
    {
      id: 1,
      iconImg: <BsKeyboard className={iconFormat} />,
      iconLabel: "Web Developer",
    },
    {
      id: 2,
      iconImg: <BsCpu className={iconFormat} />,
      iconLabel: "Tech Enthusiast",
    },
    {
      id: 3,
      iconImg: <BsJoystick className={iconFormat} />,
      iconLabel: "Video Games",
    },
  ];

  return (
    <section
      name="about"
      className="max-w-screen-lg py-68 mx-auto flex flex-col justify-center w-full h-full align-center"
    >
      <div
        name="body-text"
        className="flex flex-col justify-center items-center"
      >
        <h1 className="flex justify-center items-center text-center uppercase text-title font-250 p-8 tracking-wider">
          A Little Bit About Me
        </h1>

        <div className="flex justify-center items-center">
          <Image
            src={benchPic.src}
            alt="Photo Icon"
            className="w-44 h-44 rounded-full"
            width={176}
            height={176}
            unoptimized={true}
            loader={lazy}
          />
        </div>

        <div
          name="about-me"
          className="flex flex-col justify-center text-center align-center my-10 leading-7 mx-0 text-base font-body max-w-[620px]"
        >
          <text>
            Hello! My name is Kenny Dang, and I recently graduated from{" "}
            <a
              href="https://www.odu.edu/"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Old Dominion University
            </a>{" "}
            with a Bachelor of Science in Computer Science. I am currently
            working as a full-time software engineer at{" "}
            <a
              href="https://www.swisslog.com/"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Swisslog
            </a>
            . I am always looking for ways to improve my technical skills by
            working on personal projects.
          </text>
          <br />
          <text className="pb-0">
            My hobbies and interest include playing video-games, watching anime,
            weightlifting, building computers and keyboards, and basically
            anything tech related.
          </text>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="align-center p-6 h-48 w-640 font-body font-thin bg-summaryGray">
            <h3 className="flex justify-center uppercase mb-10 text-summary font-250">
              Summary:
            </h3>

            <div className="flex flex-row justify-between">
              {summary.map((icon) => {
                return <Summary key={icon.id} icon={icon} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
