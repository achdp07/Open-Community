import React from "react";
import { useNavigate, Link } from "react-router-dom";
//import { useAuthStore } from "../store/authStore"; // ✅ import zustand store

//import PageAnimation from "../components/ui/PageAnimation";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const login = useAuthStore((state) => state.login); // ✅ get login from store
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ✅ simple mock login logic (replace with Firebase later)
    if (email === "admin@test.com" && password === "admin123") {
      login("admin");
      navigate("/admin-dashboard");
    } else {
      login("user");
      navigate("/organizer");
    }
  };

  return (
    <PageAnimation>
    <div className="flex w-full h-screen">
      <div className="mt-6 ml-6">
        <a href="/home">
          <img src="src/assets/ICON BLEU.png" alt="" width={40} height={10} />
        </a>
      </div>

      {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
        >
          <ArrowLeft size={20} />
        </button>

      <div className="items-center justify-center mx-auto my-auto bg-white p-4 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-2">
          Welcome Back!
        </h1>
        <p className="text-base text-center font-medium text-gray-500">
          Please enter your details!
        </p>

        {/* ✅ Login Form with handler */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col mt-4 space-y-4"
        >
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your Username"
              className="w-full border border-blue-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="w-full border border-blue-300 p-2 rounded-lg"
            />
          </div>

          <div className="flex space-between items-center">
            <input type="checkbox" id="keep" className="mr-2" />
            <label htmlFor="keep">Keep me logged in</label>

            <div>
              <button
                type="button"
                className="text-base font-medium text-blue-500 ml-4"
              >
                forgot password?
              </button>
            </div>
          </div>

          <div className="mt-6 text-center gap-y-2 flex flex-col">
            {/* Change button text to Login */}
            <button
              type="submit"
              className="active:scale-[.95] active-duration-75 hover:scale-[1.01] ease-in-out 
          transition-all bg-blue-600 text-white font-medium
          py-2 px-4 rounded-lg"
            >
              Login
            </button>

            <button className="border p-2 rounded-lg">
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="Google Logo"
                className="inline mr-2"
              />
              Sign in with Google
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-500 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium ml-2">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Image Section */}

      
      <div className="hidden lg:flex lg:w-1/3 h-full rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        <img 
          src="src\assets\login_image.jpg" 
          alt="Concert crowd" 
          className="w-full h-full object-cover"
        />
        
      </div>
       
    </div>
    </PageAnimation>
  );
};

export default Login;