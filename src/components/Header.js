import React from "react";
import TestLogo from "../../public/images/test-logo.svg";

export default () => {
  return (
    <header>
      <div className="bg-blue-1 mb-4 pb-4 pt-3">
        <img
          src={TestLogo}
          className="m-auto"
        />
      </div>
    </header>
  );
};
