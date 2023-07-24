import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Auth/Authprovider";
import { useContext } from "react";
const Register = () => {
  const {googleLogin,singUp}=useContext(authContext)
  const { register, handleSubmit , formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const handlegoogleIn=()=>{
    googleLogin()
    .then(result=>{
        const currentUser=result.user;
        console.log(currentUser);
    })
    .catch(error=>{
      console.error(error.message);
    })
  }
  return (
    <div className="hero min-h-screen pt-16 w-full bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body pb-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                className="py-2 bg-slate-100 rounded-md ps-2"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="label-text-alt text-red-400">
                  This is required*
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                className="py-2 bg-slate-100 rounded-md ps-2"
              />
              {errors.email && errors.email.type === "required" && (
                <span className="label-text-alt text-red-400">
                  This is required*
                </span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className="py-2 bg-slate-100 rounded-md ps-2"
              />
              {errors.password && errors.password.type === "required" && (
                <span className="label-text-alt text-red-400">
                  This is required*
                </span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="label-text-alt text-red-400">
                  {"password should be 6 charecter"}
                </p>
              )}
              
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                className="py-2 bg-slate-100 rounded-md ps-2"
                {...register("confirm", { required: true })}
              />
              {errors.confirm && errors.confirm.type === "required" && (
                <span className="label-text-alt text-red-400">
                  This is required*
                </span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                className="py-2 bg-slate-100 rounded-md ps-2"
                {...register("photo", { required: true })}
              />
              {errors.photo && errors.photo.type === "required" && (
                <span className="label-text-alt text-red-400">
                  This is required*
                </span>
              )}
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                already register ? go to login
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn " type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="card-body pt-1">
            <div className="divider"></div>
            <button className="btn " onClick={handlegoogleIn}>
              <FaGoogle />
              With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
