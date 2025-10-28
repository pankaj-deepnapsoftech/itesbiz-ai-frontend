import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaPhone, FaShieldAlt, FaUserPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registrationDisabled, setRegistrationDisabled] = useState(false);

  const navigate = useNavigate();

  const data = { email, password, name, mobile };

  // Check if registration is allowed (only one user allowed)
  const checkRegistrationStatus = async () => {
    try {
      // Try to make a test registration request to check if registration is disabled
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/user/check-registration-status`);
      if (response.data.registrationDisabled) {
        setRegistrationDisabled(true);
        setError("Registration is disabled. Only one user is allowed.");
      }
    } catch {
      // If the endpoint doesn't exist, we'll let the backend handle the restriction
      console.log("Registration status check not available");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Check if registration is disabled
    if (registrationDisabled) {
      setError("Registration is disabled. Only one user is allowed.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/register`,
        data,
        {
          headers: {
            
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Register successful:", response.data);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      console.error("Register failed:", err.response?.data || err.message);
      const errorMessage = err.response?.data?.message || "Registration failed. Try again.";
      
      // Check if it's the single user restriction error
      if (errorMessage.includes("Only one user is allowed")) {
        setRegistrationDisabled(true);
        toast.error("Registration is disabled. Only one user is allowed.");
      } else {
        toast.error("Registration failed");
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.85,
      easing: "ease-in-out",
    });
    
    // Check registration status on component mount
    checkRegistrationStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 rounded-full opacity-55 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 w-full h-72 flex items-center justify-center px-4 relative overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>
          
          <div className="text-center text-white max-w-2xl reveal relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <FaUserPlus className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join Our Community
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Create your account and start your journey with us
            </motion.p>
          </div>
        </motion.div>

        {/* Form Section */}
        <div className="flex justify-center px-4 -mt-20 mb-10">
          <motion.div 
            className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl w-full max-w-md reveal border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 rounded-full mb-4">
                <FaShieldAlt className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h2>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                  Sign in
                </Link>
              </p>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={submitHandler} className="space-y-6">
              {registrationDisabled && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg text-sm text-center"
                >
                  <strong>Registration Disabled:</strong> Only one user is allowed in the system.
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={registrationDisabled}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${registrationDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={registrationDisabled}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${registrationDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={registrationDisabled}
                    className={`w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${registrationDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    disabled={registrationDisabled}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm ${registrationDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-start space-x-3 text-sm text-gray-600"
              >
                <input type="checkbox" id="terms" className="mt-1 accent-green-600" disabled={registrationDisabled} />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <NavLink to="/terms" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                    Terms of Use
                  </NavLink>{" "}
                  and{" "}
                  <NavLink to="/policy" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                    Privacy Policy
                  </NavLink>
                  .
                </label>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading || registrationDisabled}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: registrationDisabled ? 1 : 1.02 }}
                whileTap={{ scale: registrationDisabled ? 1 : 0.98 }}
                className={`w-full text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 relative overflow-hidden ${
                  loading || registrationDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 hover:from-blue-600 hover:via-sky-600 hover:to-green-600"
                }`}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </>
                  ) : registrationDisabled ? (
                    <>
                      <FaShieldAlt className="w-5 h-5" />
                      <span>Registration Disabled</span>
                    </>
                  ) : (
                    <>
                      <FaUserPlus className="w-5 h-5" />
                      <span>Create Account</span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;

