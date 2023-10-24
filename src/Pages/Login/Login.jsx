import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const { signIn, googleLogin } = useContext(AuthContext);
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

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then(result => {
      const user = result.user;

      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'User Login Successful',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
      // if (signIn === true || signIn === false) {
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'User Login Successful',
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      // } else {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'User Login Failed',
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      // }
    });
  };
  const handleValidateCaptcha = e => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Something went wrong!',
      // });
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>SB Resto | Sign In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex shadow-2xl bg-base-100">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <form onSubmit={handleLogin} className="card md:w-1/2 max-w-sm  ">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">LogIn now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  className="input input-bordered  rounded-none"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type Your Password"
                  className="input input-bordered rounded-none"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="user_captcha_value"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type the Captcha"
                  className="input input-bordered rounded-none"
                />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-warning rounded-none "
                  type="submit"
                  value="Login"
                />
              </div>
              <p>
                <small>
                  New Here ?{' '}
                  <Link to="/signup" className="text-blue-500">
                    Create an New Account
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
