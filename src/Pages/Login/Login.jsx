/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/media/logo.png"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("example"));

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen w-screen">
        {/* photo */}
        <div className="login relative">
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
  <span className="text-lg">Sign In with Gmail</span>
</AwesomeButton>
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg">Sign In with phone</span>
</AwesomeButton>
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg">Sign In with Facebook</span>
</AwesomeButton>
<AwesomeButton
  className="lg:w-80"
  type="primary"
> 
  <span className="text-lg">Sign In with Github</span>
</AwesomeButton>
</div>
           </div>
        </div>
       
        <div>
          <div>
            <p className="text-center lg:text-4xl text-xl font-bold lg:mt-44">
              Log Into Your Account
            </p>
            <p className="text-center text-slate-700">
              Don't have an account?
              <Link to="/register" className="px-2 font-semibold ">
                Sign up
              </Link>
              Free
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-20">
            <div className="flex flex-col ">
            <div className="flex  flex-col gap-3">
              <input
                className="shadow-md rounded-md block w-1/2 mx-auto py-2 shadow-slate-500 pl-4"
                placeholder="Name   "
                {...register("example", { required: true })}
              />

              <input
                className="shadow-md rounded-md block w-1/2 mx-auto py-2 shadow-slate-500 pl-4"
                placeholder="email"
                {...register("exampleRequired", { required: true })}
              />
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
        <div><p className=" mt-4 text-center font-semibold text-slate-400"><input type="radio" name="select" className="mx-auto " /> Remember me for 7 days</p></div>
        
            <p className="text-center font-semibold text-slate-500 underline">Forgot Password?</p>
       
            </div>
            <section className="text-center">
            <input
              type="submit" value="Log in With Email"
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

export default Login;
