import { Link, useLocation, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/others/authentication2.png';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || '/';
  const handleGoogleLogIn = () => {
    googleLogin().then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    });
  };

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl).then(() => {
        console.log('user profile info updated successfully');
        reset();
        Swal.fire({
          icon: 'success',
          title: 'User Login Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      });
    });
  };
  return (
    <>
      <Helmet>
        <title>SB Resto | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-base-100">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={signupImg} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card md:w-1/2 max-w-sm"
          >
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register('name', { required: true })}
                  placeholder="Type Your Full Name"
                  className="input input-bordered rounded-none"
                />
                {errors.name && (
                  <span className="text-red-700 mt-1">Name is required !</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="imgUrl"
                  {...register('photoUrl', { required: true })}
                  placeholder="Image Url Is Required"
                  className="input input-bordered rounded-none"
                />
                {errors.photoUrl && (
                  <span className="text-red-700 mt-1">
                    Image url is required !
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register('email', { required: true })}
                  placeholder="Type Your Email"
                  className="input input-bordered rounded-none"
                />{' '}
                {errors.email && (
                  <span className="text-red-700 mt-1">Email is required !</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Type Your Password"
                  className="input input-bordered rounded-none"
                />{' '}
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-blue-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6 ">
                <input
                  className="btn btn-warning rounded-none"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                <small>
                  Already Account ?
                  <Link
                    to="/login"
                    className="text-blue-500 mx-1 link link-hover"
                  >
                    Please Login
                  </Link>
                </small>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={() => handleGoogleLogIn()}
                className="btn btn-warning rounded-none normal-case"
              >
                <FcGoogle className="mx-1 text-2xl " />
                Continue With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
