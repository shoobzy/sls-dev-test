import React from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Link } from "react-router-dom";
import compareStrip from "./components/compareStrip";

const Step2 = props => {
  const { action, state } = useStateMachine(updateAction);
  const { handleSubmit, control } = useForm({
    defaultValues: state.data
  });
  const onSubmit = data => {
    action(data);
    props.history.push("./step3");
  };

  const options = [
    { label: "£10,000", value: "10000" },
    { label: "£20,000", value: "20000" },
    { label: "£30,000", value: "30000" },
    { label: "£40,000", value: "40000" },
    { label: "£50,000", value: "50000" },
    { label: "£60,000", value: "60000" },
    { label: "£70,000", value: "70000" },
    { label: "£80,000", value: "80000" },
    { label: "£90,000", value: "90000" },
    { label: "£100,000", value: "100000" },
    { label: "£110,000", value: "110000" },
    { label: "£120,000", value: "120000" },
    { label: "£130,000", value: "130000" },
    { label: "£140,000", value: "140000" },
    { label: "£150,000", value: "150000" },
    { label: "£160,000", value: "160000" },
    { label: "£170,000", value: "170000" },
    { label: "£180,000", value: "180000" },
    { label: "£190,000", value: "190000" },
    { label: "£200,000", value: "200000" },
  ];

  return (
    <>
      <compareStrip />
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="wrapper-inner"
        >
          <h1>How much cover would you like?</h1>

          <div className="selector lg">
            <Controller
              as={
                <CreatableSelect
                  isClearable
                  options={options}
                  autoFocus
                  noOptionsMessage="Not found..."
                  components={{
                    DropdownIndicator:() => null,
                    IndicatorSeparator:() => null,
                    IndicatorsContainer:() => null,
                  }}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary25: '#EDF7FF',
                      primary: '#2253FF',
                    },
                  })}
                />
              }
              control={control}
              name="cover"
              defaultValue={{ label: "£150,000", value: "150000" }}
            />
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
