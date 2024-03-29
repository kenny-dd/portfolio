import React from "react";

function Icons({ icon }) {
  const socialIconFormat = "m-0.5 text-2xl bg-[#333] text-[#f3f3f3] p-4";

  return (
    <li>
      <a
        name={icon.socialName}
        href={icon.link}
        target="_blank"
        aria-label={icon.socialName}
      >
        <div className={socialIconFormat}>{icon.logo}</div>
      </a>
    </li>
  );
}

export default Icons;
