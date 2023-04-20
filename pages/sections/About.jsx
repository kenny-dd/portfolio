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
      <div name="body-text" className="flex flex-col justify-center items-center">
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
          <text className="mr-0">
            Hello! My name is Kenny Dang, and I am currently a fourth year
            undergraduate student at Old Dominion University pursuing a degree
            in computer science. I am currently seeking a full-time software
            engineering position after graduation in Spring 2023. In the future,
            I hope to be a well-rounded software developer that provides real
            world solutions.
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
