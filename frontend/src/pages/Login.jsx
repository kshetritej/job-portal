import { useNavigate } from "react-router-dom";
import '../index.css'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen radial w-full px-5 flex items-center justify-center">
      <div className="flex flex-col px-8 md:px-10 py-8 items-center gap-8 max-w-[500px] w-full bg-white rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold">Job Portal</h1>
          <span className="text-secondary font-light">
            Login to your account
          </span>
        </div>
        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 w-full ">
            <div className="flex flex-col gap-2">
              <label>Username:</label>
              <input className="py-3 px-4 rounded-md border text-secondary" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password:</label>
              <input
                type="password"
                className="py-3 px-4 rounded-md border text-secondary"
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <span className="text-secondary">Remember me</span>
            </div>
            <span className="text-primary font-semibold">Forgot Password?</span>
          </div>
          <div className="flex flex-col gap-5 px-4 w-full">
            <button className="bg-primary text-white p-4 rounded-full">
              Sign In
            </button>
            <span className="text-center">
              Don't have an account?{" "}
              <span
                className="text-primary font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Create account
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
