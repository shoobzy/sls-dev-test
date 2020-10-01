import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Link } from "react-router-dom";
import CompareStrip from "./components/CompareStrip";

const Step2 = props => {
  const { action, state } = useStateMachine(updateAction);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: state.data
  });
  const onSubmit = data => {
    action(data);
    props.history.push("./step3");
  };

  const [value, setValue] = React.useState("£150000");

  return (
    <>
      <CompareStrip />
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="wrapper-inner"
        >
          <h1>How much cover would you like?</h1>

          <div className={`selector lg ${formState.submitCount ? '' : 'populated'}`}>
            <select
              name="coverAmount"
              ref={register}
              value={value}
              onChange={e => setValue(e.currentTarget.value)}
            >
              <option value="£10000">£10000</option>
              <option value="£20000">£20000</option>
              <option value="£30000">£30000</option>
              <option value="£40000">£40000</option>
              <option value="£50000">£50000</option>
              <option value="£60000">£60000</option>
              <option value="£70000">£70000</option>
              <option value="£80000">£80000</option>
              <option value="£90000">£90000</option>
              <option value="£100000">£100000</option>
              <option value="£110000">£110000</option>
              <option value="£120000">£120000</option>
              <option value="£130000">£130000</option>
              <option value="£140000">£140000</option>
              <option value="£150000">£150000</option>
              <option value="£160000">£160000</option>
              <option value="£170000">£170000</option>
              <option value="£180000">£180000</option>
              <option value="£190000">£190000</option>
              <option value="£200000">£200000</option>
            </select>
            <i className="fas fa-chevron-down text-base text-blue-1"></i>
          </div>

          <nav className="steps mt-10">
            <ul className="flex justify-between">
              <li>
                <Link
                  to="/"
                  className="btn pager back radius-5"
                >
                  <i className="fas fa-chevron-left text-base"></i>
                  <span className="ml-3">Back</span>
                </Link>
              </li>
              <li>
                <button className="btn pager next radius-5" type="submit">
                  <span className="mr-3">Next</span>
                  <i className="fas fa-chevron-right text-base"></i>
                </button>
              </li>
            </ul>
          </nav>
        </form>
      </div>
    </>
  );
};

export default withRouter(Step2);
