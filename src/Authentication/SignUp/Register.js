import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";


const Register = () => {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const onSubmit = (data, event) => {
      
        signUp(data.email, data.password)
        .then(result => {
            const user = result.user;
            navigate('/');
        
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="mt-5">
              <h1 className="text-4xl font-serif font-bold text-primary">
                Please Sign Up{" "}
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="input input-bordered bg-blue-100"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                    className="input input-bordered bg-blue-100"
                  />
                  {errors.password && (
                    <p className="text-warning">
                      Password should be at least 6 character{" "}
                    </p>
                  )}
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register Now</button>
                </div>
                <div>
                  <p>
                    Already have an account? Please{" "}
                    <Link className="text-warning" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
