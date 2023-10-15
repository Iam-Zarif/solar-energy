/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { IoMdGitPullRequest } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CFormCheck } from "@coreui/react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
const SubmitInfo = () => {
        const [termsAccepted, setTermsAccepted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();  
  const onSubmit = (data) => {
    data.termsAccepted = termsAccepted;
    if(termsAccepted === false){
        toast.error("Please check the terms")
    }
   
    // console.log(data);
// image, firstName, date_of_birth, place_of_birth ,email, phone, call, address, City, state, zip, social, url, formCheck

    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const image = data.image;
    const date_of_birth = data.date_of_birth;
    const place_of_birth = data.place_of_birth;
    const phone = data.phone;
    const call = data.call;
    const City = data.City;
    const address = data.address;
    const state = data.state;
    const zip = data.zip;
    const social = data.social;
    const url = data.url;
 
    // 

    const userInfo = {
      email,
      firstName,
      lastName,
      image,
      date_of_birth,
      place_of_birth,
      phone,
      call,
      City,
      address,
      state,
      zip,
      social,
      url,
      termsAccepted,
    }
    console.log(userInfo);


    fetch("http://localhost:2000/userInfo", {
          method: "POST",
          headers:{
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }).then(res => res.json()).then(data => {console.log(data);
          toast.success('Your Informations submitted successfully');
          reset();
        }).catch(err => {console.log(err);})
    
  };
  
  const handleTermsCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };
  return (
    <div className="border lg:py-10 lg:px-10 border-slate-600 rounded-xl">
        <Toaster/>
      <Tooltip id="my-tooltip" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-12 lg:gap-y-12">
          <div className="col-span-12">
            <input
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Choose your Image"
              className="shadow-md mx-auto w-1/3 border-none block text-lg font-bold rounded-lg shadow-black"
              type="file"
              name="image"
              placeholder="Image Link"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-600 text-center">This field is required</p>
            )}
          </div>
          <div className="col-span-6">
            <input
              className="shadow-md mx-auto w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="col-span-6">
            <input
              className=" shadow-md mx-auto w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="Last name"
              type="text"
              name="lastName"
              {...register("lastName", { required: true })}
            />

            {errors.lastName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/*  */}
          <div className="col-span-6">
            <input
              className="shadow-md mx-auto w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              type="date"
              name="date_of_birth"
              placeholder="date_of_birth"
              {...register("date_of_birth", { required: true })}
            />
            {errors.Date_Of_Birth && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="col-span-6">
            <input
              className=" shadow-md mx-auto w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="Place Of Birth"
              type="text"
              name="place_of_birth"
              {...register("place_of_birth", { required: true })}
            />

            {errors.lastName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/*  */}
          <div className="col-span-4">
            <input
              className="mx-auto shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="Your Email"
              type="email"
              name="email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="col-span-4">
            <input
              className="mx-auto shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="Your Phone Number"
              type="text"
              name="phone"
              {...register("phone", { required: true })}
            />

            {errors.phone && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="col-span-4">
            <input
              className=" shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="Secondery Phone(optional)"
              type="text"
              name="call"
              {...register("call")}
            />
          </div>
          {/*  */}
          <div className="col-span-12">
            <input
              className=" shadow-md w-full border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="Address"
              type="text"
              name="address"
              {...register("address", { required: true })}
            />

            {errors.address && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/*  */}
          <div className="col-span-4">
            <input
              className="mx-auto shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="City"
              type="text"
              name="City"
              {...register("City", { required: true })}
            />

            {errors.City && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="col-span-4">
            <input
              className="mx-auto shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="State"
              type="text"
              name="state"
              {...register("state", { required: true })}
            />

            {errors.state && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="col-span-4">
            <input
              className=" shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="ZIP code"
              type="text"
              name="zip"
              {...register("zip", { required: true })}
            />

            {errors.zip && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="col-span-10  mt-12">
            <p className="text-xl font-semibold flex items-center gap-1">
              <IoMdGitPullRequest />
              <span>
                Please include the full URL to your profile on each site that
                you would like to show.
              </span>{" "}
            </p>
          </div>
          <div className="col-span-6">
            <select
              name="social"
              id="social"
              {...register("socialType")}
              className=" shadow-md w-4/5 border-none block text-lg font-bold rounded-lg shadow-black "
            >
            <option value="volvo" name="volvo" className="text-lg font-bold"> 
                Facebook
              </option>
              <option value="saab" name="saab" className="text-lg font-bold">
                Github
              </option>
              <option value="mercedes" name="marcedes" className="text-lg font-bold">
                LinkedIn
              </option>
              <option value="audi" name="audi" className="text-lg font-bold">
                Discord
              </option>
            </select>
          </div>

          <div className="col-span-6">
            <input
              className=" shadow-md w-full lg:w-11/12 mx-auto border-none block text-lg font-bold rounded-lg shadow-black"
              placeholder="URL"
              type="url"
              name="url"
              {...register("url", { required: true })}
            />

            {errors.url && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="col-span-6 lg:mt-28">
          <CFormCheck
          name="formCheck"
            id="flexCheckDefault"
            label="I have read the terms and conditions"
            onChange={handleTermsCheckboxChange}
          />
        </div>
        <button
          className="block bg-sky-600 text-white py-3 w-full mt-4 rounded-xl text-xl font-bold "
          type="Submit "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitInfo;
