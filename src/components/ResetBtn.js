import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

export default () => {
  const { state } = useStateMachine(updateAction);
  const { handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    // e.target.reset(); // HTML standard reset() function will only reset inputs' value
    // console.log(state.data);
  };

  React.useEffect(() => {
    reset(state.data)
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="reset" value="Reset fields" />
    </form>
  );
};
