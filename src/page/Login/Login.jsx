import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Auth/Authprovider";
const Login = () => {
  const {googleLogin,SignIn}=useContext(authContext)
    const { register, handleSubmit } = useForm();
  const handleGoogleIn=()=>{
    googleLogin()
        .then(result=>{
            const currentUser=result.user;
            console.log(currentUser);
        })
        .catch(error=>{
          console.error(error.message);
        })
  }
  const onSubmit = data => {
    // console.log(data)
    const {email,password}=data;
    console.log(email,password);
    
  };
  return (
    <div className="hero min-h-screen w-full pt-16 bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body pb-3"  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email")} className="py-2" />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" className="py-2" {...register("password")} />
              <label className="label">
                <Link to='/register' className="label-text-alt link link-hover">
                  New Here?go to register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn " type="submit">Login</button>
            </div>
          </form>
          <div className="card-body pt-1">
          <div className="divider"></div>
          <button className="btn " onClick={handleGoogleIn}><FaGoogle/>With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;