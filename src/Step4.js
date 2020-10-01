import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Link } from "react-router-dom";

const Step4 = props => {
  const { action, state } = useStateMachine(updateAction);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    defaultValues: state.data
  });
  const onSubmit = data => {
    action(data);
    props.history.push("./success");
  };

  return (
    <>
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="wrapper-inner"
        >
          <h1>Your Contact Details</h1>
          <div className="mb-6">
            <label htmlFor="phoneNumber">Phone Number<sup>*</sup></label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              ref={register({required: "This field is required"})}
              className={errors.phoneNumber && 'error'}
            />
            {errors.phoneNumber && <p role="alert" className="text-sm text-red text-left">{errors.phoneNumber.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="emailAddress">Email Address<sup>*</sup></label>
            <input
              type="text"
              placeholder="Email Address"
              name="emailAddress"
              ref={register({required: "This field is required"})}
              className={errors.emailAddress && 'error'}
            />
            {errors.emailAddress && <p role="alert" className="text-sm text-red text-left">{errors.emailAddress.message}</p>}
          </div>
          <div className="relative mb-6">
            <input
              type="checkbox"
              name="stayInformed"
              id="stayInformed"
              className="absolute opacity-0"
            />
            <label
              htmlFor="stayInformed"
              className="text-base text-grey-1 font-normal cursor-pointer"
            >
              <span className="inline-block ml-10">Keep me up to date with great offers</span>
              <i className="fas fa-check text-white"></i>
            </label>
          </div>
          <div className="btn btn-submit w-full mb-5">
            <input
              type="submit"
              className="w-full radius-5"
              value="Get My Quotes Now"
            />
          </div>
          <p className="text-grey-1 text-center">By submitting this form and based on your requirements you agree on our terms &amp; contitions.</p>

          <nav className="steps mt-10">
            <ul className="flex justify-start">
              <li>
                <Link
                  to="/step3"
                  className="btn pager back radius-5"
                >
                  <i className="fas fa-chevron-left text-base"></i>
                  <span className="ml-3">Back</span>
                </Link>
              </li>
            </ul>
          </nav>
        </form>
      </div>
    </>
  );
};

export default withRouter(Step4);
