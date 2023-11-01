import React from "react";

function Summary({ icon }) {
  const iconLayout = "flex flex-col items-center align-top px-8 flex-wrap";

  return (
    <div className={iconLayout}>
      <div className="inline-block">{icon.iconImg}</div>
      <p className="text-iconLabel font-250">{icon.iconLabel}</p>
    </div>
  );
}

export default Summary;
