import { AwesomeButton } from "react-awesome-button";
import HomeContainer from "../../Container/HomeContainer";
import { useForm } from "react-hook-form"
import { MdOutlineErrorOutline } from "react-icons/md";
import {BiUserCircle} from "react-icons/bi"
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example"))
  return (
    <HomeContainer>
      <div className="pt-32">
        <div className="relative group">
          <p className="lg:text-2xl font-semibold">Stay Tuned With Us</p>
          <div className="lg:w-52 absolute lg:top-9 lg:h-1 bg-sky-700 group-hover:bg-sky-500 duration-300"></div>
        </div>
        <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
     <div className="grid grid-cols-2 gap-4">
     <div className="relative">
        <input className="pl-16 font-semibold w-full border-none shadow-md shadow-slate-400 border h-14" placeholder="Your Name" type="text" name="name" {...register("name" ,{required: true})} />
      {errors.name && <span  className="flex items-center gap-1 text-red-600"><MdOutlineErrorOutline/><span>This field is required</span></span>}
     <div className="absolute top-0 bg-slate-100 p-1 rounded-md border-3  border-r-violet-950"><BiUserCircle size={41}/></div>
      </div>

      <div className="relative">
        <input className="pl-16 font-semibold w-full border-none shadow-md shadow-slate-400 border h-14" placeholder="Your Email" type="email" name="email" {...register("email", { required: true })} />
      {errors.email && <span className="flex items-center gap-1 text-red-600"> <MdOutlineErrorOutline/> <span>This field is required</span></span>}
      <div className="absolute top-0 bg-slate-100 p-1 rounded-md border-3  border-r-violet-950"><AiOutlineMail size={41}/></div>
      </div>
      <div className="col-span-2 relative">
        <input className="pl-16 w-full font-semibold border-none shadow-md shadow-slate-400 border  h-14" type="text" placeholder="Your Phone Number" name="number" {...register("number", { required: true })} />
      {errors.number && <span className="flex items-center gap-1 text-red-600"> <MdOutlineErrorOutline/> <span>This field is required</span></span>}
      <div className="absolute top-0 bg-slate-100 p-1 rounded-md border-3  border-r-violet-950"><AiOutlinePhone size={41}/></div>
      </div>
      <div className="col-span-2"> 
        <textarea className="w-full font-semibold border-none shadow-md shadow-slate-400 border" rows="8" type="text" placeholder="Your Feedback Here" name="feedback" {...register("feedback", { required: true })} />
      {errors.feedback && <span className="flex items-center gap-1 text-red-600"> <MdOutlineErrorOutline/> <span>This field is required</span></span>}
      </div>
     </div>

      <button className="mt-5"><AwesomeButton>Submit</AwesomeButton></button>
    </form>
        </div>
      </div>
    </HomeContainer>
  );
};

export default ContactForm;
