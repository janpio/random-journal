import { SubmitHandler, useForm } from "react-hook-form";
import { useSignIn } from "../hooks/useSignIn";

export default function Login() {
  const signIn = useSignIn();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<any> = data => {
    if(data.email && data.password) {
      signIn(data);
    }
  };

  return (
    <div className='flex w-full justify-center align-middle'>
      <div className="w-1/2">
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow shadow-[#FCDAAB]">
          <h2 className="font-bold text-2xl py-4">Login to Journal 📚 </h2>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input {...register("email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input {...register("password")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
              {errors.password && <p className="text-[#FCDAAB] text-xs italic">This field is required</p>}
            </div>
            <a href="/register">
              <p className="text-gray-700 text-md bold">Don't have an account? Register</p>
            </a>
            <div className="flex items-center justify-between">
              <button className="bg-[#FCDAAB] hover:bg-[#FF494A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}