/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/media/logo.png"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import gmail from "../../assets/media/google.png"
import facebook from "../../assets/media/facebook.png"
import github from "../../assets/media/github (1).png"
import phone from "../../assets/media/phone-call.png" 
import {BsExclamationCircle, BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const navigate =useNavigate()
    const {createUser, UpdatedUserInfo} = useContext(AuthContext) 
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      console.log(watch("example"));
    
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password).then(result =>{
            const loggedUser = result.loggedUser;
            UpdatedUserInfo(data.name, data.photo)
            console.log(loggedUser)
            reset();
            navigate("/")
        }).catch(err => console.log(err));
      };
    return (
        <>
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen w-screen">
        {/* photo */}
        <div className="login relative">
          <div className="absolute top-5 left-4">
            <Link to="/"><BsFillArrowLeftCircleFill className="text-black" size={30}/></Link>
          </div>
           <div className="">
           <div className="absolute top-12 left-1/3">
                <div className="flex items-center"><img src={logo} alt="" />
<p className="text-white font-bold lg:text-4xl">Solar Energy</p></div>
<hr className="text-white"/>
<div>
    <p className="text-white font-semibold left-4 absolute ">Log in With Social Media to get quick access</p>
</div>
            </div>
<div className="lg:top-1/3 left-1/3 absolute flex flex-col gap-3">
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg flex gap-3"><img src={gmail} alt="" className="bg-blue-200 rounded-full p-1"/> Sign In with Gmail</span>
</AwesomeButton>
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg flex gap-3"><img src={facebook} alt="" className="bg-blue-200 rounded-full p-1"/> Sign In with Facebook</span>
</AwesomeButton>
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg flex gap-3"><img src={github} alt="" className="bg-blue-200 rounded-full p-1"/> Sign In with Github</span>
</AwesomeButton>
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg flex gap-3"><img src={phone} alt="" className="bg-blue-200 rounded-full p-1"/> Sign In with phone</span>
</AwesomeButton>
          
</div>
           </div>
           <p className="absolute text-white font-semibold bottom-32 px-10">Welcome to Solar Energy Solar Energy! We're thrilled to have you join our community of eco-conscious individuals who are making a positive impact on the planet. Our mission is simple: to harness the boundless power of the sun and provide you with clean, sustainable, and affordable energy solutions.</p>
        </div>
       
        <div>
          <div>
            <p className="text-center lg:text-4xl text-xl font-bold lg:mt-44">
              Create Your Account
            </p>
            <p className="text-center text-slate-700">
             Already have an account?
              <Link to="/login  " className="px-2 font-semibold ">
                Log in
              </Link>
              Free
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-14">
            <div className="flex flex-col ">
            <div className="flex  flex-col gap-2">
              <div className="text-center">
              <input
              type="text"
              name="name"
                className="shadow-md rounded-md block w-1/2 mx-auto py-2 shadow-slate-500 pl-4"
                placeholder="Name"
                {...register("name", { required: true })}
              />
{errors.name && <div className=" text-red-600 text-center flex justify-center items-center gap-1">
<div><BsExclamationCircle className="mx-auto"/>
</div>
    <span>Where is name</span></div>}
              </div>
             <div className="text-center">
             <input
              type="email"
              name="email"
                className="shadow-md rounded-md block w-1/2 mx-auto py-2 shadow-slate-500 pl-4"
                placeholder="email"
                {...register("email", { required: true })}
              />
            {errors.email && <div className=" text-red-600 text-center flex justify-center items-center gap-1">
<div><BsExclamationCircle className="mx-auto"/>
</div>
    <span>Where is email</span></div>}
             </div>
            <div className="text-center">
            <input
              type="password"
              name="password"
                className="shadow-md rounded-md block w-1/2 mx-auto py-2 shadow-slate-500 pl-4"
                placeholder="password"
                {...register("password", { required: true })}
              />
           {errors.password && <div className=" text-red-600 text-center flex justify-center items-center gap-1">
<div><BsExclamationCircle className="mx-auto"/>
</div>
    <span>Where is password</span></div>}
            </div>
              <div className="text-center">
              <input
              type="url"
              name="photo"
                className="shadow-md rounded-md block w-1/2 mx-auto py-2 shadow-slate-500 pl-4"
                placeholder="Photo url"
                {...register("photo", { required: true })}
              />
           {errors.photo && <div className=" text-red-600 text-center flex justify-center items-center gap-1">
<div><BsExclamationCircle className="mx-auto"/>
</div>
    <span>Where is photo Link</span></div>}
              </div>
            </div>

        <div><p className=" mt-4 text-center font-semibold text-slate-400"><input type="radio" name="select" className="mx-auto " /> Remember me for 7 days</p></div>
        
            <p className="text-center font-semibold text-slate-500 underline">Forgot Password?</p>
       
            </div>
            <section className="text-center">
            <input
              type="submit" value="Please Register"
              className="lg:mt-5 shadow-md rounded-md px-4 py-2 bg-sky-700 text-white font-semibold "
            />
            </section>
          </form>
        </div>
        {/* form */}
      </div>
    </>
    );
};

export default Register;