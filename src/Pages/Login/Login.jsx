
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      console.log(watch("example"))
    
      const onSubmit = (data) => console.log(data)
    return (
        <>
        <div className="grid lg:grid-cols-2 grid-cols-1 h-screen w-screen">
            {/* photo */}
       <div className="login"></div>
            {/* photo */}
{/* form */}
       <div>
        <div>
            <p className="text-center lg:text-4xl text-xl font-bold mt-12">Log Into Your Account</p>
        </div>
         <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="border" placeholder="Name block" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input className="border block" placeholder="email" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" className="shadow-md rounded-md px-4 py-2 bg-sky-700 text-white font-semibold "/>
    </form></div>
{/* form */}
        </div>
        </>
    );
};

export default Login;