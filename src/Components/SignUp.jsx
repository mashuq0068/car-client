import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { FacebookAuthProvider } from "firebase/auth";

import toast, { Toaster } from "react-hot-toast";


const SignUp = () => {
    const fbProvider = new FacebookAuthProvider()
    const {userWithTwitter , createUser} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name , photo , email , password)
        if(password.length < 6) {
         return toast.success ("your password must be at least six characters")
        }
        createUser(email , password)
        .then(data => {
           console.log(data.user)

        })
        .catch (error => console.error(error.message))
    }
    const handleTwitter = () => {
        userWithTwitter()
        .then(data => console.log(data))
        .catch ((error
        )=> console.error(error.message))

    }
    
    return (
        <div className="text-center">
            <Toaster position="center-top">

            </Toaster>
             This is signUp go for <Link to='/login'>Sign Up</Link>
             <div className="hero  min-h-screen bg-base-200"> 
  <div className="hero-content w-full flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>  */}
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input  type="text" placeholder="User Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input  type="text" placeholder="Photo Url"  name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <div>
        <button onClick={handleTwitter} className="btn btn-accent w-full">Continue with Twitter</button>
      </div>
      <div>
        <button  className="btn btn-accent w-full">Continue with facebook</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;