import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter, BsInstagram, BsSpotify } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import Icons from "./components/Icons";
import { Linkedin } from "react-bootstrap-icons";

function Socials() {
  const socials = [
    {
      id: 1,
      socialName: "linkedin",
      link: "https://www.linkedin.com/in/kennyndang/",
      logo: <FaLinkedinIn />,
    },
    {
      id: 2,
      socialName: "github",
      link: "https://github.com/kenny-dd",
      logo: <BsGithub />,
    },
    {
      id: 3,
      socialName: "twitter",
      link: "https://twitter.com/k4nnyc0des",
      logo: <BsTwitter />,
    },
    {
      id: 4,
      socialName: "instagram",
      link: "https://www.instagram.com/kenny.dd/",
      logo: <BsInstagram />,
    },
    {
      id: 5,
      socialName: "spotify",
      link: "https://open.spotify.com/user/lpsashelytv",
      logo: <BsSpotify />,
    },
  ];

  return (
    <section className="bg-[#202020] h-fit">
      <div>
        <ul className="flex flex-row align-center items-center justify-center list-none text-white pt-12 pb-8 pl-0 pr-0 m-0">
          {socials.map((icon) => {
            return <Icons key={icon.id} icon={icon} />;
          })}
        </ul>
      </div>

      <div className="flex flex-row justify-center text-center text-[#B9B9B9] pb-6">
        Kenny Dang{" "}
        <i>
          <BiCopyright className="pt-1 text-2xl" />
        </i>{" "}
        2023
      </div>
    </section>
  );
}

export default Socials;
