/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import NavContainer from "../../Shared/Navbar/NavContainer";
import img from "../../assets/media/bench.png";
import emailjs from "@emailjs/browser";
import { AwesomeButton } from "react-awesome-button";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const ContactUs = () => {
  // send email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dg1v7vx",
        "template_reeez96",
        form.current,
        "iROsAhoFFEwJRNfan"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // send email
  const { User } = useContext(AuthContext);
  // console.log(User)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  return (
    <NavContainer>
      <div className="mt-28">
        <p className="text-center text-lg font-bold text-sky-700">
          Lets Get Started
        </p>
        <p className="text-4xl font-semibold text-center mt-4">Contact Us</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 items-center">
        <div>
          <img className="mx-auto" src={img} alt="" />
        </div>
        <div className="mx-auto">
          <p className="text-2xl font-bold">
            Straight from our desk, to your Inbox.
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            Subscribe to our latest coming newsletter of solar panel
          </p>
          {/* Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="mt-20">
              <div className="flex flex-col gap-4">
                <div>
                  <Tooltip id="my-tooltip" />
                  <input
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="You can Change your name"
                    defaultValue={User?.displayName}
                    type="text"
                    name="user_name"
                    className="lg:h-14 h-full block  w-full border-none shadow-md shadow-slate-300 rounded-lg font-semibold text-slate-500"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>

                <div>
                  <input
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="You can Change your email"
                    defaultValue={User?.email}
                    type="email"
                    name="user_email"
                    className="block lg:h-14 h-full w-full border-none shadow-md shadow-slate-300 rounded-lg font-bold text-slate-500"
                    {...register("email", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div>
                  <textarea
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Write  Here"
                    placeholder="Tell us about yourself" 
                    type="text"
                    name="message"
                    className="block  lg:h-40 h-full w-full border-none shadow-md shadow-slate-300 rounded-lg font-bold align-text-top"
                    {...register("message", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.message && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>

              <div className="mt-5 ">
                <AwesomeButton className="lg:w-1/2 w-full">
                  <input type="submit" value="Subscribe" className="block " />
                </AwesomeButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default ContactUs;
