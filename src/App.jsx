import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const Slider = lazy(() => import("./Pages/Slider"));
const It = lazy(() => import("./Pages/task/It"));
const Secuirity = lazy(() => import("./Pages/task/Secuirity"));
const HumanResource = lazy(() => import("./Pages/task/HumanResource"));
const CRMProducts = lazy(() => import("./Pages/Products/Client Resource management"));
const CRMTask = lazy(() => import("./Pages/task/Crm"));
const HRMProducts = lazy(() => import("./Pages/Products/Human resource management"));
const SoftwareDevelopment = lazy(() => import("./Pages/Products/Real time automation"));

const AppDev = lazy(() => import("./Pages/task/AppDev"));
const Finance = lazy(() => import("./Pages/task/Finance"));
const MainLayout = lazy(() => import("./Components/MainLayout"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Development = lazy(() => import("./Pages/Development"));
const Brand = lazy(() => import("./Pages/Brand"));
const About = lazy(() => import("./Components/About"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const PrivacyPolicy = lazy(() => import("./Components/Legal/PrivacyPolicy"));
const Term = lazy(() => import("./Components/Legal/Term"));
const DigitalMarketing = lazy(() => import("./Pages/DigitalMarketing"));
const MetaAdds = lazy(() => import("./Components/DigitalMarketing/MetaAdds"));
const Contact = lazy(() => import("./Pages/Contact"));
const Career = lazy(() => import("./Components/Career"));
import { Toaster } from "react-hot-toast";
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard"));
const Overview = lazy(() => import("./Pages/Admin/Overview"));
const Users = lazy(() => import("./Pages/Admin/Users"));
const CareerList = lazy(() => import("./Pages/Admin/CareerList"));
const Enquiry = lazy(() => import("./Pages/Admin/Enquiry"));
const Contacts = lazy(() => import("./Pages/Admin/Contacts"));
const Products = lazy(() => import("./Pages/Admin/Products"));
const Employees = lazy(() => import("./Pages/Admin/Employees"));
const Followup = lazy(() => import("./Pages/Admin/Followup"));
const Refferal = lazy(() => import("./Pages/Admin/Refferal"));
const Business = lazy(() => import("./Pages/Admin/Business"));
const Corporate = lazy(() => import("./Pages/Admin/Corporate"));
const ProductQuote = lazy(() => import("./Pages/Admin/ProductQuote"));
const IotProducts = lazy(() => import("./Pages/IotProducts"));
const Forgotpwd = lazy(() => import("./Pages/Forgotpwd"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const ResetPassword = lazy(() => import("./Pages/ResetPassword"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const BlogPost = lazy(() => import("./Pages/BlogPost"));
const BlogsAdmin = lazy(() => import("./Pages/Admin/Blogs"));
import './index.css';

// Custom hook to scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
      <Routes>
        {/* Main Layout with Header & Footer */}
        <Route path="/register" element= {<Register />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/forgot-password" element={<Forgotpwd />} />  
        <Route path="/reset-password" element={<ResetPassword />} />  

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/slider" element={<Slider />}/>
          <Route path="/it" element={<It />}/>
          <Route path="/secuirity" element={<Secuirity />}/>
          <Route path="/human" element={<HumanResource />}/>
          <Route path="/client-relationship-management" element={<CRMProducts/>}/>
          <Route path="/crm/task" element={<CRMTask/>}/>
          <Route path="/human-resource-management" element={<HRMProducts/>}/>
          <Route path="/Real-Time-Production-Automation-Software" element={<SoftwareDevelopment/>}/>
          <Route path="/appdev" element={<AppDev />}/>
          <Route path="/finance" element={<Finance />}/>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="development" element={<Development />} />
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="brand" element={<Brand />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Term/>} />
          <Route path="/meta/ads" element={<MetaAdds/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/career" element={<Career/>}/>
          <Route path="/Iot-products" element={<IotProducts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/reset-password/:token" element={<ResetPassword/>} />
               

         
        </Route>
         <Route path="*" element={<PageNotFound />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="users" element={<Users />} />
          <Route path="career" element={<CareerList />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="contact-list" element={<Contacts />} />
          <Route path="products" element={<Products />} />
          <Route path="employees" element={<Employees />} />
          <Route path="followups" element={<Followup />} />
          <Route path="products/quote" element={<ProductQuote/>} />
          <Route path="blogs" element={<BlogsAdmin />} />
        </Route>
      </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
