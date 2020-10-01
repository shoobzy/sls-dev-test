import React from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Link } from "react-router-dom";

const Step3 = props => {
  const { action, state } = useStateMachine(updateAction);
  const { handleSubmit, errors, control, register, formState } = useForm({
    mode: 'onChange',
    defaultValues: state.data
  });

  const onSubmit = data => {
    action(data);
    props.history.push("./step4");
  };

  const titles = [
    { label: "Mr", value: "mr" },
    { label: "Miss", value: "miss" },
    { label: "Mrs", value: "mrs" },
    { label: "Ms", value: "ms" }
  ];

  return (
    <div className="wrapper">
      <div className="bg-blue-2 text-center mb-8 p-4 radius-5">
        <svg className="inline-block mb-2" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.5 31C12.4344 31 9.43763 30.091 6.88866 28.3878C4.3397 26.6846 2.35303 24.2639 1.17988 21.4316C0.00671829 18.5993 -0.300237 15.4828 0.297834 12.4761C0.895905 9.4694 2.37214 6.70756 4.53985 4.53984C6.70757 2.37213 9.4694 0.895902 12.4761 0.297831C15.4828 -0.30024 18.5993 0.00672804 21.4316 1.17989C24.2639 2.35304 26.6846 4.3397 28.3878 6.88866C30.0909 9.43762 31 12.4344 31 15.5C31 19.6109 29.367 23.5534 26.4602 26.4602C23.5533 29.367 19.6109 31 15.5 31ZM24.4202 10.0018C24.0766 9.65854 23.6108 9.46571 23.1251 9.46571C22.6395 9.46571 22.1736 9.65854 21.83 10.0018L12.8943 18.9376L9.99406 16.0373C9.65131 15.7078 9.19299 15.5258 8.71754 15.5305C8.24209 15.5352 7.78744 15.7261 7.45123 16.0623C7.11502 16.3985 6.92407 16.8532 6.91939 17.3287C6.91472 17.8041 7.09669 18.2624 7.42623 18.6052L11.5346 22.7135C11.9183 23.0462 12.4092 23.2294 12.9171 23.2294C13.425 23.2294 13.9159 23.0462 14.2996 22.7135L24.4202 12.5929C24.5905 12.4228 24.7255 12.2208 24.8176 11.9985C24.9097 11.7762 24.9571 11.538 24.9571 11.2974C24.9571 11.0567 24.9097 10.8185 24.8176 10.5962C24.7255 10.3739 24.5905 10.1719 24.4202 10.0018Z" fill="#37B04B"/>
        </svg>
        <p className="text-white font-bold">Great, we have your Test requirements, we just need a few more details to get your free quote</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="wrapper-inner"
      >
        <div className="mb-6">
          <label htmlFor="title">Title<sup>*</sup></label>
          <div className="selector sm title w-5/12">
            <Controller
              as={
                <CreatableSelect
                  isClearable
                  options={titles}
                  autoFocus
                  placeholder="Title"
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
              name="title"
              rules={{ required: true }}
            />
            <i className="fas fa-chevron-down text-base text-blue-1"></i>
            {errors.title && <p role="alert" className="text-sm text-red text-left">This field is required</p>}
          </div>
        </div>


        <div className="mb-6">
          <label htmlFor="firstName">First Name<sup>*</sup></label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={register({required: "This field is required"})}
            className={errors.firstName && 'error'}
          />
          {errors.firstName && <p role="alert" className="text-sm text-red text-left">{errors.firstName.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="lastName">Last Name<sup>*</sup></label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            ref={register({required: "This field is required"})}
            className={errors.lastName && 'error'}
          />
          {errors.lastName && <p role="alert" className="text-sm text-red text-left">{errors.lastName.message}</p>}
        </div>

        <nav className="steps mt-10">
          <ul className="flex justify-between">
            <li>
              <Link
                to="/step2"
                className="btn pager back radius-5"
              >
                <i className="fas fa-chevron-left text-base"></i>
                <span className="ml-3">Back</span>
              </Link>
            </li>
            <li>
              <button className={`btn pager next radius-5 ${!formState.isValid && 'disabled'}`} type="submit">
                <span className="mr-3">Next</span>
                <i className="fas fa-chevron-right text-base"></i>
              </button>
            </li>
          </ul>
        </nav>
      </form>
    </div>
  );
};

export default withRouter(Step3);
