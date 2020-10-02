import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import compareStrip from "./components/compareStrip";
import Modal from "./components/Modal";
import useModal from "./components/useModal";

const Step1 = props => {
  const { action, state } = useStateMachine(updateAction);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: state.data
  });
  const singleCover = watch("singleCover");
  const onSubmit = data => {
    action(data);
    props.history.push("./step2");
  };

  const {isShowing, toggle} = useModal();

  return (
    <>
      <compareStrip />
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="wrapper-inner"
        >
          <h1>I’d like quotes for:</h1>
          <div className="btn btn-quote-basis-single w-full">
            <input
              name="singleCover"
              ref={register}
              type="checkbox"
            />
            <label
              htmlFor="singleCover"
              className="w-full radius-5"
            >
              <svg className="absolute z-20 pointer-events-none" width="12" height="35" viewBox="0 0 12 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7549 9.40478C10.7549 8.36097 9.90901 7.60205 8.86427 7.60205H2.95985C1.91604 7.60205 1.07017 8.36097 1.07017 9.40478L0 16.6791C0 17.7219 0.845869 18.6081 1.88968 18.6081H2.47887L3.93289 33.0937C3.93289 33.7282 4.44902 34.1676 5.08492 34.1676H6.74012C7.37603 34.1676 7.89215 33.7282 7.89215 33.0937L9.34664 18.6081H9.93583C10.9806 18.6081 11.8264 17.7219 11.8264 16.6791L10.7549 9.40478Z"/>
                <path d="M5.91256 6.33684C7.66243 6.33684 9.08099 4.91829 9.08099 3.16842C9.08099 1.41855 7.66243 0 5.91256 0C4.16269 0 2.74414 1.41855 2.74414 3.16842C2.74414 4.91829 4.16269 6.33684 5.91256 6.33684Z"/>
              </svg>
              Just Me
            </label>
          </div>
          <div className="btn btn-quote-basis w-full">
            <svg className="absolute z-20 pointer-events-none" width="24" height="35" viewBox="0 0 24 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7549 9.4049C10.7549 8.3611 9.90901 7.60217 8.86427 7.60217H2.95985C1.91604 7.60217 1.07017 8.3611 1.07017 9.4049L0 16.6792C0 17.7221 0.845869 18.6082 1.88968 18.6082H2.47887L3.93289 33.0938C3.93289 33.7284 4.44902 34.1677 5.08492 34.1677H6.74012C7.37603 34.1677 7.89215 33.7284 7.89215 33.0938L9.34664 18.6082H9.93583C10.9806 18.6082 11.8264 17.7221 11.8264 16.6792L10.7549 9.4049Z"/>
              <path d="M5.91256 6.33684C7.66243 6.33684 9.08099 4.91829 9.08099 3.16842C9.08099 1.41855 7.66243 0 5.91256 0C4.16269 0 2.74414 1.41855 2.74414 3.16842C2.74414 4.91829 4.16269 6.33684 5.91256 6.33684Z"/>
              <path d="M22.9159 10.7808C22.9159 9.79481 22.1163 9.07751 21.1307 9.07751H15.5537C14.5682 9.07751 13.7691 9.79481 13.7691 10.7808L12.7585 21.9519C12.7585 22.9375 13.5577 23.7736 14.5432 23.7736H15.0996L16.4727 33.1535C16.4727 33.7529 16.9606 34.1678 17.5614 34.1678H19.1241C19.7248 34.1678 20.2123 33.7529 20.2123 33.1535L21.5858 23.7736H22.1422C23.1286 23.7736 23.9273 22.937 23.9273 21.9519L22.9159 10.7808Z"/>
              <path d="M18.3423 7.88251C19.9949 7.88251 21.3345 6.54285 21.3345 4.89029C21.3345 3.23773 19.9949 1.89807 18.3423 1.89807C16.6898 1.89807 15.3501 3.23773 15.3501 4.89029C15.3501 6.54285 16.6898 7.88251 18.3423 7.88251Z"/>
            </svg>
            <input
              type="button"
              className="w-full radius-5"
              value="Me &amp; My Partner"
              onClick={toggle}
            />
            <Modal
              isShowing={isShowing}
              hide={toggle}
            />
          </div>

          <nav className="steps mt-10">
            <ul className="flex justify-end">
              <li>
                <button
                  className={`btn pager next radius-5 ${!singleCover && 'disabled'}`}
                  type="submit"
                >
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

export default withRouter(Step1);
