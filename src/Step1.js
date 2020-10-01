import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import CompareStrip from "./components/CompareStrip";

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

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <CompareStrip />
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
              onClick={() => setShowModal(true)}
            />
          </div>
          {/* @todo Extract this modal as a separate component */}
          {showModal ? (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <div className="modal-inner relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <button
                    className="p-1 pr-0 ml-auto bg-transparent text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-5xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-center p-5 pt-8">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.0069325 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91974 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05844 6.10051 6.1005C8.05845 4.14257 10.553 2.8092 13.2687 2.26901C15.9845 1.72881 18.7994 2.00606 21.3576 3.06569C23.9157 4.12531 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30Z" fill="#FF0000"/>
                        <path d="M23.1599 14.08C24.154 14.08 24.9599 13.2741 24.9599 12.28C24.9599 11.2859 24.154 10.48 23.1599 10.48C22.1657 10.48 21.3599 11.2859 21.3599 12.28C21.3599 13.2741 22.1657 14.08 23.1599 14.08Z" fill="#FF0000"/>
                        <path d="M9.40986 14.08C10.404 14.08 11.2099 13.2741 11.2099 12.28C11.2099 11.2859 10.404 10.48 9.40986 10.48C8.41575 10.48 7.60986 11.2859 7.60986 12.28C7.60986 13.2741 8.41575 14.08 9.40986 14.08Z" fill="#FF0000"/>
                        <path d="M16.1598 18C14.7252 18.0002 13.3115 18.3434 12.0364 19.001C10.7613 19.6585 9.66193 20.6113 8.82985 21.78C8.67602 21.9962 8.61436 22.2646 8.65843 22.5262C8.70251 22.7878 8.8487 23.0212 9.06485 23.175C9.281 23.3288 9.5494 23.3905 9.81102 23.3464C10.0726 23.3023 10.306 23.1562 10.4598 22.94C11.0992 22.0419 11.9417 21.3075 12.9187 20.7967C13.8956 20.2859 14.9794 20.013 16.0818 20.0003C17.1842 19.9877 18.274 20.2355 19.2624 20.7238C20.2508 21.212 21.11 21.9268 21.7698 22.81C21.929 23.0222 22.1659 23.1624 22.4284 23.1999C22.691 23.2375 22.9577 23.1691 23.1698 23.01C23.382 22.8509 23.5223 22.614 23.5598 22.3514C23.5973 22.0889 23.529 21.8222 23.3698 21.61C22.5316 20.489 21.4434 19.5791 20.1917 18.9524C18.9401 18.3257 17.5596 17.9996 16.1598 18Z" fill="#FF0000"/>
                      </svg>
                    </div>
                    {/*body*/}
                    <div className="flex-auto p-2 pt-0 pb-6">
                      <h2>Sorry, but we can’t help you</h2>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-center pt-1 pb-10">
                      <button
                        className="btn bg-red text-white p-2 pr-10 pl-10 text-2xl font-bold"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

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
