import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Success = () => {
  const { state } = useStateMachine(updateAction);

  return (
    <div className="wrapper mt-8">
      <div className="wrapper-inner">
        <h4 className="text-green">Thank you {state.data.firstName}</h4>
        <p className="text-xl">We’ve received your enquiry and will get back to you soon to discuss your quote.</p>
      </div>
    </div>
  );
};

export default Success;
