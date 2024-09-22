/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forms() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const serviceTypeRef = useRef();
  const childAgeRef = useRef();
  const primaryLanguageRef = useRef();
  const bioRef = useRef();

  //   const notify = () => toast("Form submitted successfully!");

  //   Handle form submission
  const handleSubmit = () => {
    // event.preventDefault(); // Prevent the default form submission behavior

    // Access the value of the input using the ref
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const serviceType = serviceTypeRef.current.querySelector(
      'input[name="serviceType"]:checked'
    ).value;
    const childAge = childAgeRef.current.querySelector(
      'input[name="childAge"]:checked'
    ).value;
    const primaryLanguage = primaryLanguageRef.current.querySelector(
      'input[name="primaryLanguage"]:checked'
    ).value;
    const bio = bioRef.current.value;

    // Do something with the form data
    console.log("Form submitted with:", {
      userName,
      email,
      phoneNumber,
      serviceType,
      childAge,
      primaryLanguage,
      bio,
    });
    // toast.success("Form submitted successfully!", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000, // 3 seconds
    // });
  };

  return (
    <div>
      <form
        className="max-w-screen mx-auto px-6 md:px-10 lg:px-10 pt-5 pb-5 bg-white/10 shadow-md rounded"
        method="post"
        name="contact v1"
        // data-netlify="true"
        onSubmit={handleSubmit}
        action="/"
      >
        <h2 className="mt-0 mb-4 text-2xl">Contact form</h2>
        <input type="hidden" name="form-name" value="contact v1" />
        <div className="sm:flex gap-x-5 flex-wrap">
          <div className="mb-4 min-w-[10rem]">
            <label
              htmlFor="userName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="userName"
              name="name"
              ref={userNameRef}
              className="w-full lg:w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline mr-24"
            />
          </div>

          <div className="mb-4 min-w-[8rem] max-w-[30rem]">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              name="email"
              className="w-full lg:w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4 min-w-[10rem] max-w-[50rem]">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              ref={phoneNumberRef}
              name="phone"
              className="w-full lg:w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        {/* Radio Button Group for Service Type */}
        <div
          className="
          flex flex-col mt-4 p-0 sm:flex 
          md:flex-row md:gap-x-28 md:flex-wrap
          lg:flex-row lg:gap-x-28 lg:flex-wrap"
        >
          <div ref={serviceTypeRef} className="mb-2 mt-4">
            <label
              name="service[]"
              className="block text-gray-700 font-bold mb-1 md:mb-0 lg:mb-0"
            >
              What service are you interested in?
            </label>
            <div className="flex flex-col gap-2 md:gap-0 lg:gap-0 font-light">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="serviceType"
                  value="NE"
                  className="form-radio"
                />
                <span>Neurodevelopment Evaluation</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="serviceType"
                  value="SLE"
                  className="form-radio"
                />
                <span>Speech and Language Evaluation</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="serviceType"
                  value="IC"
                  className="form-radio"
                />
                <span>Initial Consultation</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="serviceType"
                  value="SLT"
                  className="form-radio"
                />
                <span>Speech and Language Therapy</span>
              </label>
            </div>
          </div>

          {/* Radio Button Group for Primary Language */}
          <div ref={primaryLanguageRef} className="mb-2 mt-4">
            <label
              name="language[]"
              className="block text-gray-700 font-bold mb-1 md:mb-0 lg:mb-0"
            >
              What is your child's primary language?
            </label>
            <div className="flex flex-col gap-2 md:gap-0 lg:gap-0 font-light">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="primaryLanguage"
                  value="SP"
                  className="form-radio"
                />
                <span>Spanish</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="primaryLanguage"
                  value="EN"
                  className="form-radio"
                />
                <span>English</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="primaryLanguage"
                  value="DS"
                  className="form-radio"
                />
                <span>Danish</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="primaryLanguage"
                  value="OTHER"
                  className="form-radio"
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          {/* Radio Button Group for Child's Age */}
          <div
            name="age[]"
            ref={childAgeRef}
            className="mt-4 mb-1 md:mb-0 lg:mb-0"
          >
            <label className="block text-gray-700 font-bold mb-1 md:mb-0 lg:mb-0">
              How old is your child?
            </label>
            <div className="flex flex-col gap-2 md:gap-0 lg:gap-0 font-light">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="childAge"
                  value="0-12"
                  className="form-radio"
                />
                <span>0 - 12 months</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="childAge"
                  value="12-24"
                  className="form-radio"
                />
                <span>12 - 24 months</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="childAge"
                  value="2-3"
                  className="form-radio"
                />
                <span>2 - 3 years old</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="childAge"
                  value="4-5"
                  className="form-radio"
                />
                <span>4 - 5 years old</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="childAge"
                  value="OVER6"
                  className="form-radio"
                />
                <span>Over 6 years old</span>
              </label>
            </div>
          </div>
        </div>

        {/* Textarea for Bio */}
        <div className="mt-6 mb-1 md:m-mb-1 lg:-mb-1">
          <label
            htmlFor="Message:"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="bio"
            ref={bioRef}
            name="message"
            placeholder="Tell us a little bit about the case"
            className="w-full px-3 py-2 border rounded shadow resize-none focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
}
