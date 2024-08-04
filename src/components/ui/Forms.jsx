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
        className="max-w-screen mx-auto p-10 bg-white shadow-md rounded"
        method="post"
        name="contact v1"
        // data-netlify="true"
        onSubmit={handleSubmit} 
        action="/pages/ContactUs"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div className="sm:flex">
          <div className="mb-4">
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
              className="w-auto lg:w-96 px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline mr-24"
            />
          </div>

          <div className="mb-4">
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
              className="w-auto lg:w-96 px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mb-4">
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
            className="w-auto lg:w-96 px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Radio Button Group for Service Type */}
        <div className="sm:flex md:space-x-48 mt-12">
          <div ref={serviceTypeRef} className="mb-4">
            <label
              name="service[]"
              className="block text-gray-700 font-bold mb-2"
            >
              What service are you interested in?
            </label>
            <div className="flex flex-col space-y-2">
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
          <div ref={primaryLanguageRef} className="mb-4">
            <label
              name="language[]"
              className="block text-gray-700 font-bold mb-2"
            >
              What is your child's primary language?
            </label>
            <div className="flex flex-col space-y-2">
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
        </div>

        {/* Radio Button Group for Child's Age */}
        <div name="age[]" ref={childAgeRef} className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            How old is your child?
          </label>
          <div className="flex flex-col space-y-2">
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

        {/* Textarea for Bio */}
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            ref={bioRef}
            name="message"
            placeholder="Tell us a little bit about yourself"
            className="w-full px-3 py-2 border rounded shadow resize-none focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>

        <button
          type="submit"
          //   onClick={notify}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
}
