import React from "react";
import Aig from "../../public/images/aig.png";
import TheExeter from "../../public/images/the-exeter.png";
import Lv from "../../public/images/lv.png";
import Zurich from "../../public/images/zurich.png";
import LegalAndGeneral from "../../public/images/legal-and-general.png";

export default () => {
  return (
    <div className="compare border-b border-solid border-grey-3 mb-6">
      <div className="wrapper text-center">
        <h2>Compare <span className="text-blue-1">Test</span> Quotes</h2>
        <div className="providers flex flex-wrap justify-between content-center m-auto pt-5 pb-6">
          <img
            src={Aig}
            width="43"
            height="23"
            className="self-center"
          />
          <img
            src={TheExeter}
            width="47"
            height="19"
            className="self-center"
          />
          <img
            src={Lv}
            width="55"
            height="23"
            className="self-center"
          />
          <img
            src={Zurich}
            width="49"
            height="30"
            className="self-center"
          />
          <img
            src={LegalAndGeneral}
            width="41"
            height="30"
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
};
