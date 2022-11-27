import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthContext/AuthContext";
import { setAuthToken } from "../Auth/Auth";


const Register = () => {
    const { signUp, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [signUpError, setSignUpError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
      setSignUpError('')
      console.log(data);
        signUp(data.email, data.password)
        .then(result => {
          const user = result.user;
          toast("User sign up succesfully")
          setAuthToken(data);
          const userInfo = {
            displayName: data.name,
          };
          
          
          updateUser(userInfo)
            .then(() => {
              // saveUser();
             navigate("/");
            })
            .catch(err => {
              console.log(err)
              setSignUpError(errors.message)
            })
          
          

          
        
      })
      .catch((error) => console.log(error));
  };
  // const saveUser = (name, email) => {
  //   const user = { name, email }
  //   console.log(user)
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       'content-type': 'application/json'

  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       navigate("/");
  //     })
  // }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered bg-blue-100"
                  />
                </div>
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
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Choose account type</span>
                  </label>
                  <select
                    {...register("role", { required: true })}
                    className="select select-bordered"
                  >
                    <option selected>Buyer</option>
                    <option>Seller</option>
                  </select>
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
                  {signUpError && <p className="text-red-600">{signUpError}</p>}
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
