import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, reset } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message || "Login failed");
    }

    if (isSuccess || user) {
      toast.success("Login successful!");
      if (user?.role === 'Admin') {
        navigate('/admin');
      } else {
        navigate('/volunteer');
      }
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full card">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-text">Sign in to your account</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-text mb-1">Email address</label>
            <input 
              type="email" 
              {...register("email", { required: "Email is required" })} 
              className="input-field" 
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-text mb-1">Password</label>
            <input 
              type="password" 
              {...register("password", { required: "Password is required" })} 
              className="input-field" 
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-text">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary-hover">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" disabled={isLoading} className="btn-primary w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-text">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-primary hover:text-primary-hover">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
