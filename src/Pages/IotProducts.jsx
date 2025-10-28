// //@ts-nocheck
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import { FaRocket, FaMicrochip, FaWifi, FaMobile, FaCog, FaShieldAlt, FaArrowRight, FaEye, FaQuoteLeft } from "react-icons/fa";

// const Modal = ({ children, onClose }) => {
//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60" onClick={onClose}>
//       <div className="max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>{children}</div>
//     </div>
//   );
// };

// const IotProducts = () => {
//   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
//   const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     productName: "",
//   });

//   const quoteFormFields = [
//     { name: "name", label: "Name", type: "text", icon: FaRocket },
//     { name: "email", label: "Email", type: "email", icon: FaRocket },
//     { name: "phone", label: "Phone No.", type: "text", icon: FaRocket },
//     { name: "productName", label: "Product Name", type: "text", icon: FaRocket },
//   ];

//   const customStyles = `
//     @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
//     @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
//     @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
//     @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//     .blob { animation: blob 7s infinite; }
//     .blob:nth-child(2) { animation-delay: 2s; }
//     .blob:nth-child(3) { animation-delay: 4s; }
//     .float { animation: float 6s ease-in-out infinite; }
//     .pulse { animation: pulse 2s ease-in-out infinite; }
//     .rotate { animation: rotate 20s linear infinite; }
//     .gradient-text { background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981); background-size: 300% 300%; animation: gradient 3s ease infinite; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
//     @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
//   `;

//   useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.type = "text/css";
//     styleSheet.innerText = customStyles;
//     document.head.appendChild(styleSheet);
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, [customStyles]);

//   const handleGetQuote = (product) => {
//     setSelectedProduct(product);
//     setFormData({ ...formData, productName: product.productName });
//     setIsQuoteModalOpen(true);
//   };

//   const handleReadMore = (product) => {
//     setSelectedProduct(product);
//     setIsDetailsModalOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleQuoteSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/iot/quote/products`,
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       setIsQuoteModalOpen(false);
//       toast.success("Quote request submitted successfully!");
//       console.log("API Response:", response.data);
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || "Something went wrong.";
//       toast.error(errorMessage);
//       console.error("Error submitting quote:", error);
//     }
//   };

//   const closeDetailsModal = () => {
//     setIsDetailsModalOpen(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="w-full h-auto min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="blob absolute top-20 left-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 hidden xs:block"></div>
//         <div className="blob absolute top-40 right-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 hidden sm:block"></div>
//         <div className="blob absolute -bottom-8 left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 hidden sm:block"></div>
//         <div className="blob absolute top-60 left-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/15 rounded-full mix-blend-multiply filter blur-2xl opacity-50 hidden md:block"></div>
//         <div className="blob absolute bottom-20 right-1/4 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-orange-500/15 rounded-full mix-blend-multiply filter blur-2xl opacity-50 hidden md:block"></div>
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full pulse hidden sm:block"></div>
//         <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/60 rounded-full pulse hidden sm:block" style={{animationDelay: '1s'}}></div>
//         <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400/60 rounded-full pulse hidden sm:block" style={{animationDelay: '2s'}}></div>
//         <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-pink-400/60 rounded-full pulse hidden md:block" style={{animationDelay: '0.5s'}}></div>
//         <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-orange-400/60 rounded-full pulse hidden md:block" style={{animationDelay: '1.5s'}}></div>
//       </div>

//       <motion.div 
//         className="relative z-10 w-full grid md:grid-cols-2 gap-6 sm:gap-8 grid-cols-1 px-4 sm:px-5 py-16 sm:py-24"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div 
//           className="col-span-1 flex items-center"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20"
//             >
//               <FaMicrochip className="w-4 h-4 text-blue-400 mr-2" />
//               <span className="text-blue-300 text-sm font-medium">IoT Solutions</span>
//             </motion.div>
//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <motion.h1 
//                   className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                 >
//                   IoT Products
//                 </motion.h1>
//                 <motion.div 
//                   className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: 96 }}
//                   transition={{ duration: 1, delay: 0.8 }}
//                 ></motion.div>
//               </div>
//               <motion.p 
//                 className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                 At <span className="text-blue-400 font-semibold">ITSYBIZZ</span>, we believe in turning traditional factories into smart, connected, and data-driven production hubs.
//                 <br/><br/>
//                 Our innovative hardware devices – <span className="text-orange-400 font-semibold">Tiora Core</span>, <span className="text-cyan-400 font-semibold">Apex Core</span>, and <span className="text-purple-400 font-semibold">Sentinel Core</span> – are designed to work with any type of machine, from the oldest non-PLC machines to the latest Industry 4.0 IoT-ready systems.
//               </motion.p>
//             </div>
//             <motion.div 
//               className="flex flex-wrap gap-3"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               {[
//                 { text: "AI-Powered", color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-300" },
//                 { text: "Real-time", color: "from-purple-500/20 to-pink-500/20", textColor: "text-purple-300" },
//                 { text: "Scalable", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300" },
//                 { text: "Secure", color: "from-orange-500/20 to-red-500/20", textColor: "text-orange-300" }
//               ].map((feature) => (
//                 <motion.span
//                   key={feature.text}
//                   className={`px-4 py-2 bg-gradient-to-r ${feature.color} backdrop-blur-sm rounded-full text-sm ${feature.textColor} border border-white/20 shadow-lg`}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ duration: 0.2 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
                  
//                 >
//                   {feature.text}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//         <motion.div 
//           className="col-span-1 flex justify-center items-center relative"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="relative">
//             <div className="absolute inset-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border-2 border-blue-500/20 rounded-full rotate"></div>
//             <div className="absolute inset-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border border-purple-500/20 rounded-full rotate" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
//             <motion.img 
//               src="/iot.png" 
//               alt="IoT Products" 
//               className="w-56 sm:w-72 md:w-80 max-w-full h-auto drop-shadow-2xl float relative z-10"
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               transition={{ duration: 0.3 }}
//             />
//             <motion.div 
//               className="absolute -top-4 -right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <FaMicrochip className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//             </motion.div>
//             <motion.div 
//               className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2.5, repeat: Infinity }}
//             >
//               <FaWifi className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//             </motion.div>
//             <motion.div 
//               className="absolute top-1/2 -right-8 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <FaMobile className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div 
//         className="relative z-10 bg-gradient-to-b from-transparent via-slate-800/50 to-slate-900/80 px-4 sm:px-8 py-10 sm:py-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1 }}
//       >
//         <motion.div 
//           className="max-w-7xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//         >
//           <div className="text-center mb-16">
//             <motion.div
//               className="inline-block"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 1.4 }}
//             >
//               <motion.h2 
//                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.4 }}
//               >
//                 Our Devices & Their Benefits
//               </motion.h2>
//               <motion.div 
//                 className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6"
//                 initial={{ width: 0 }}
//                 animate={{ width: 128 }}
//                 transition={{ duration: 1.2, delay: 1.8 }}
//               ></motion.div>
//             </motion.div>
//             <motion.p 
//               className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-1"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.6 }}
//             >
//               Explore our comprehensive range of <span className="text-blue-400 font-semibold">IoT products</span> designed to enhance your business efficiency and connectivity. From legacy machines to Industry 4.0 systems, we have the perfect solution for every manufacturing need.
//             </motion.p>
//           </div>

//           <motion.div 
//             className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1.8 }}
//           >
//             <motion.div
//               className="group relative bg-gradient-to-br from-white/10 via-orange-500/5 to-red-500/5 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-3xl border border-orange-500/20 transition-all duration-500 overflow-hidden shadow-2xl"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 2 }}
//               whileHover={{ 
//                 scale: 1.02,
//                 boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)"
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               <motion.div 
//                 className="flex justify-center mb-6"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
//                   <img
//                     src="/src/assets/tiora.png"
//                     alt="TIORA Core"
//                     className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
//                   />
//                 </div>
//               </motion.div>
//               <div className="space-y-3 text-center">
//                 <motion.div 
//                   className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-xs text-orange-300"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <FaMicrochip className="w-3 h-3 mr-1" />
//                   TIORA CORE
//                 </motion.div>
//                 <motion.h3 
//                   className="text-xl font-bold text-white"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   Tiora Core
//                 </motion.h3>
//                 <motion.p 
//                   className="text-sm text-gray-300 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-3 rounded-lg"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   For Legacy (Non-PLC) Machines - Transforms traditional machines into smart connected assets
//                 </motion.p>
//                 <motion.div 
//                   className="text-xs text-gray-400 space-y-1"
//                   initial={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p><span className="font-semibold text-orange-400">Category:</span> Legacy Machine IoT</p>
//                   <p><span className="font-semibold text-orange-400">Type:</span> Non-PLC Solution</p>
//                 </motion.div>
//                 <motion.div 
//                   className="text-xs text-gray-300 space-y-1 mt-3"
//                   initial={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-orange-400 rounded-full"></div><span>Real-time machine status tracking</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-orange-400 rounded-full"></div><span>Automatic production count capture</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-orange-400 rounded-full"></div><span>Downtime & error code logging</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-orange-400 rounded-full"></div><span>Universal compatibility</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-orange-400 rounded-full"></div><span>Energy consumption monitoring</span></div>
//                 </motion.div>
//                 <motion.div 
//                   className="text-xs text-gray-300 space-y-1 mt-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-3 rounded-lg border border-orange-500/20"
//                   initial={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="font-semibold text-orange-400 mb-2">Key Benefits:</p>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Tracks machine on/off status in real-time.</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Captures production counts time automatically.</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Logs machine downtime and error codes.</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Easy to install with non-intrusive sensors.</span></div>
//                 </motion.div>
//               </div>
//               <motion.div 
//                 className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-6"
//                 initial={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.button
//                   className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group"
//                   onClick={() => handleReadMore({
//                     id: 'tiora-core',
//                     productName: 'TIORA Core',
//                     brandName: 'TIORA',
//                     category: 'Legacy Machine IoT',
//                     subcategory: 'Non-PLC Solution',
//                     description: 'For Legacy (Non-PLC) Machines - Transforms traditional machines into smart connected assets',
//                     specification: 'Real-time tracking, production monitoring, downtime analysis, universal compatibility',
//                     image: '/src/assets/tiora.png'
//                   })}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaEye className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">Details</span>
//                 </motion.button>
//                 <motion.button
//                   className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 group"
//                   onClick={() => handleGetQuote({
//                     id: 'tiora-core',
//                     productName: 'TIORA Core',
//                     brandName: 'TIORA',
//                     category: 'Legacy Machine IoT',
//                     subcategory: 'Non-PLC Solution',
//                     description: 'For Legacy (Non-PLC) Machines - Transforms traditional machines into smart connected assets',
//                     specification: 'Real-time tracking, production monitoring, downtime analysis, universal compatibility',
//                     image: '/src/assets/tiora.png'
//                   })}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaQuoteLeft className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">Quote</span>
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               className="group relative bg-gradient-to-br from-white/10 via-cyan-500/5 to-blue-500/5 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-3xl border border-cyan-500/20 transition-all duration-500 overflow-hidden shadow-2xl"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 2.1 }}
//               whileHover={{ 
//                 scale: 1.02,
//                 boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               <motion.div 
//                 className="flex justify-center mb-6"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
//                   <img src="/src/assets/apex.png" alt="Apex" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" />
//                 </div>
//               </motion.div>
//               <div className="space-y-3 text-center">
//                 <motion.div 
//                   className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-xs text-cyan-300"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <FaWifi className="w-3 h-3 mr-1" />
//                   APEX CORE
//                   </motion.div>
//                   <motion.h3 className="text-xl font-bold text-white" whileHover={{ scale: 1.02 }}>Apex Core</motion.h3>
//                   <motion.p className="text-sm text-gray-300 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-3 rounded-lg" whileHover={{ scale: 1.02 }}>
//                   For PLC Machines (Non-Internet Enabled) - Bridges the gap between semi-modern machines and smart manufacturing
//                   </motion.p>
//                 <motion.div className="text-xs text-gray-400 space-y-1" initial={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//                   <p><span className="font-semibold text-cyan-400">Category:</span> PLC Machine IoT</p>
//                   <p><span className="font-semibold text-cyan-400">Type:</span> Industry 4.0 Solution</p>
//                 </motion.div>
//                 <motion.div className="text-xs text-gray-300 space-y-1 mt-3" initial={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div><span>Direct PLC signal reading & data transmission</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div><span>Machine utilization & production speed monitoring</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div><span>Shift-wise & operator-wise performance tracking</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div><span>Secure local-to-cloud communication</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div><span>Plug-and-play with most industrial PLCs</span></div>
//                 </motion.div>
//                 <motion.div className="text-xs text-gray-300 space-y-1 mt-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-3 rounded-lg border border-cyan-500/20" initial={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//                   <p className="font-semibold text-cyan-400 mb-2">Key Benefits:</p>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Industry 4.0 compliance without costly upgrades</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Reduces production losses & inefficiencies</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Enhances operator accountability</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Scalable - deploy across 1 to 100 machines</span></div>
//                 </motion.div>
//               </div>
//               <motion.div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-6" initial={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//                 <motion.button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 group"
//                   onClick={() => handleReadMore({
//                     id: 'apex',
//                     productName: 'Apex',
//                     brandName: 'APEX',
//                     category: 'PLC Machine IoT',
//                     subcategory: 'Industry 4.0 Solution',
//                     description: 'For PLC Machines (Non-Internet Enabled) - Bridges the gap between semi-modern machines and smart manufacturing',
//                     specification: 'Direct PLC reading, utilization monitoring, performance tracking, secure communication, plug-and-play compatibility',
//                     image: '/src/assets/apex.png'
//                   })}
//                   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <FaEye className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">Details</span>
//                 </motion.button>
//                 <motion.button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 group"
//                   onClick={() => handleGetQuote({
//                     id: 'apex',
//                     productName: 'Apex',
//                     brandName: 'APEX',
//                     category: 'PLC Machine IoT',
//                     subcategory: 'Industry 4.0 Solution',
//                     description: 'For PLC Machines (Non-Internet Enabled) - Bridges the gap between semi-modern machines and smart manufacturing',
//                     specification: 'Direct PLC reading, utilization monitoring, performance tracking, secure communication, plug-and-play compatibility',
//                     image: '/src/assets/apex.png'
//                   })}
//                   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <FaQuoteLeft className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">Quote</span>
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               className="group relative bg-gradient-to-br from-white/10 via-purple-500/5 to-pink-500/5 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-3xl border border-purple-500/20 transition-all duration-500 overflow-hidden shadow-2xl"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 2.2 }}
//               whileHover={{ 
//                 scale: 1.02,
//                 boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               <motion.div className="flex justify-center mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
//                   <img src="/src/assets/sentinal.png" alt="Sentinel" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" />
//                 </div>
//               </motion.div>
//               <div className="space-y-3 text-center">
//                 <motion.div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs text-purple-300" whileHover={{ scale: 1.05 }}>
//                   <FaMobile className="w-3 h-3 mr-1" />
//                   SENTINEL CORE
//                 </motion.div>
//                 <motion.h3 className="text-xl font-bold text-white" whileHover={{ scale: 1.02 }}>Sentinel Core</motion.h3>
//                 <motion.p className="text-sm text-gray-300 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-3 rounded-lg" whileHover={{ scale: 1.02 }}>
//                   For Industry 4.0 IoT-Ready Machines - Built for latest generation PLC machines with internet capability
//                 </motion.p>
//                 <motion.div className="text-xs text-gray-400 space-y-1" initial={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//                   <p><span className="font-semibold text-purple-400">Category:</span> Industry 4.0 IoT</p>
//                   <p><span className="font-semibold text-purple-400">Type:</span> Advanced IoT Solution</p>
//                 </motion.div>
//                 <motion.div className="text-xs text-gray-300 space-y-1 mt-3" initial={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div><span>Direct cloud platform connection via secure IoT protocols</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div><span>Real-time OEE  tracking</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div><span>AI-driven predictive maintenance alerts</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div><span>Energy consumption & efficiency monitoring</span></div>
//                   <div className="flex items-center space-x-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div><span>Remote machine diagnostics and control</span></div>
//                 </motion.div>
//                 <motion.div className="text-xs text-gray-300 space-y-1 mt-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 rounded-lg border border-purple-500/20" initial={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//                   <p className="font-semibold text-purple-400 mb-2">Key Benefits:</p>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Complete Industry 4.0 readiness - future-proof</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Reduces energy costs through monitoring</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Increases profitability with advanced analytics</span></div>
//                   <div className="flex items-center space-x-2"><span className="text-green-400">✅</span><span>Global access - monitor factory anywhere</span></div>
//                 </motion.div>
//               </div>
//               <motion.div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-6" initial={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//                 <motion.button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 group"
//                   onClick={() => handleReadMore({
//                     id: 'sentinel',
//                     productName: 'Sentinel',
//                     brandName: 'SENTINEL',
//                     category: 'Industry 4.0 IoT',
//                     subcategory: 'Advanced IoT Solution',
//                     description: 'For Industry 4.0 IoT-Ready Machines - Built for latest generation PLC machines with internet capability',
//                     specification: 'Cloud connectivity, OEE tracking, predictive maintenance, energy monitoring, remote diagnostics',
//                     image: '/src/assets/sentinal.png'
//                   })}
//                   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <FaEye className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">Details</span>
//                 </motion.button>
//                 <motion.button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 group"
//                   onClick={() => handleGetQuote({
//                     id: 'sentinel',
//                     productName: 'Sentinel',
//                     brandName: 'SENTINEL',
//                     category: 'Industry 4.0 IoT',
//                     subcategory: 'Advanced IoT Solution',
//                     description: 'For Industry 4.0 IoT-Ready Machines - Built for latest generation PLC machines with internet capability',
//                     specification: 'Cloud connectivity, OEE tracking, predictive maintenance, energy monitoring, remote diagnostics',
//                     image: '/src/assets/sentinal.png'
//                   })}
//                   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <FaQuoteLeft className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">Quote</span>
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {isQuoteModalOpen && (
//         <Modal onClose={() => setIsQuoteModalOpen(false)}>
//           <motion.div 
//             className="w-[92vw] max-w-md mx-auto p-5 sm:p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/20"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaQuoteLeft className="w-8 h-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get a Quote</h2>
//               <p className="text-gray-300 mt-2">Request pricing for your IoT solution</p>
//             </motion.div>
//             <motion.form onSubmit={handleQuoteSubmit} className="space-y-4 sm:space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
//               {quoteFormFields.map((field, index) => (
//                 <motion.div key={field.name} className="relative" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}>
//                   <div className="relative">
//                     <input
//                       type={field.type}
//                       name={field.name}
//                       id={field.name}
//                       value={formData[field.name] || ""}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                       placeholder={field.label}
//                       required
//                       readOnly={field.name === "productName"}
//                     />
//                     {field.name === "productName" && (
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                         <FaShieldAlt className="w-5 h-5 text-gray-400" />
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//               <motion.button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
//                 <FaRocket className="w-5 h-5" />
//                 <span>Submit Quote Request</span>
//                 <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>
//             </motion.form>
//           </motion.div>
//         </Modal>
//       )}

//       {isDetailsModalOpen && selectedProduct && (
//         <Modal onClose={closeDetailsModal}>
//           <motion.div className="w-[92vw] max-w-2xl p-5 sm:p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/20 mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
//             <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//               <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 flex items-center justify-center mx-auto mb-4">
//                 <img src={selectedProduct.image} alt={selectedProduct.productName} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
//               </div>
//               <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{selectedProduct.productName}</h2>
//               <p className="text-gray-300">Product Details</p>
//             </motion.div>
//             <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
//               <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
//                 <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
//                   <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
//                     <h3 className="text-blue-400 font-semibold mb-2">Brand</h3>
//                     <p className="text-white">{selectedProduct.brandName}</p>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
//                     <h3 className="text-blue-400 font-semibold mb-2">Category</h3>
//                     <p className="text-white">{selectedProduct.category}</p>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
//                     <h3 className="text-blue-400 font-semibold mb-2">Subcategory</h3>
//                     <p className="text-white">{selectedProduct.subcategory}</p>
//                   </div>
//                 </motion.div>
//                 <motion.div className="space-y-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
//                   <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
//                     <h3 className="text-blue-400 font-semibold mb-2">Specification</h3>
//                     <p className="text-white text-sm sm:text-base">{selectedProduct.specification}</p>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
//                     <h3 className="text-blue-400 font-semibold mb-2">Description</h3>
//                     <p className="text-white text-sm sm:text-base">{selectedProduct.description}</p>
//                   </div>
//                 </motion.div>
//               </div>
//               <motion.button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2" onClick={closeDetailsModal} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
//                 <FaCog className="w-5 h-5" />
//                 <span>Close Details</span>
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default IotProducts;



import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaFileAlt,
  FaGlobe,
  FaTools,
  FaRocket,
  FaCode,
  FaMobile,
} from "react-icons/fa";
import { MdSpeed, MdSecurity, MdTrendingUp } from "react-icons/md";
import ScrollReveal from "scrollreveal";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WebDevelopment = () => {
  const cardsContent = [
    {
      title: "Tiora Core – IoT for Legacy Machines",
      description: [
        "Real-time machine on/off monitoring",
        "Automatic production counts & cycle times",
        "Logs downtime & error codes",
        "No replacement needed—upgrade old machines affordably",
        "Converts outdated assets into IoT-enabled systems",
      ],
      icon: <img src="/src/assets/tiora.png" alt="Tiora Core" className="w-16 h-16 object-contain" />,
      gradient: "",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      title: "Sentinel Core – IoT Product for PLC Machines",
      description: [
        "Reads PLC signals directly",
        "Shift-wise productivity reports",
        "Tracks utilization, errors, and operator performance",
        "Secure cloud integration for Industry 4.0 compliance",
        "Boosts operator accountability & machine efficiency",
      ],
      icon: <img src="/src/assets/sentinal.png" alt="Sentinal Core" className="w-16 h-16 object-contain" />,
      gradient: "",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      title: "Apex Core – IoT Product for Smart Factories",
      description: [
        "Direct cloud connectivity via secure IoT protocols",
        "Tracks OEE (Overall Equipment Effectiveness)",
        "Predictive maintenance with AI-driven alerts",
        "Monitors energy usage & efficiency trends",
        "Enables remote machine access & global monitoring",
      ],
      icon: <img src="/src/assets/apex.png" alt="Apex Core" className="w-16 h-16 object-contain" />,
      gradient: "",
      // gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
  
  
  ];

  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      text: "Wireless Connectivity",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      text: "Sensor Network",
    },
    {
      icon: <FaMobile className="w-6 h-6" />,
      text: "Automation System",
    },
    {
      icon: <MdSpeed className="w-6 h-6" />,
      text: "Energy Efficiency",
    },
  ];

  const stats = [
    { number: "1M+", label: "Devices Connected" },
    { number: "99.9%", label: "Data Accuracy" },
    { number: "500+", label: "Industries Served" },
    { number: "24/7", label: "Monitoring" },
  ];
  

  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 1000,
      origin: "bottom",
      distance: "60px",
      easing: "ease-out",
      interval: 150,
      reset: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium mb-6">
            <FaCode className="w-4 h-4 mr-2" />
         IOT
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
      Next-Gen IoT Products 
      <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      for Smart Manufacturing
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Our innovative <strong>IoT devices—Tiora Core, Sentinel Core, and Apex Core</strong>—are designed to work with any machine type, from old non-PLC setups to the latest Industry 4.0 systems.
          </p>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <div className="text-blue-500">{feature.icon}</div>
                <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {cardsContent.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {card.bgGradient ? (
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              ) : null}
              
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:border-transparent">
                {/* Icon Container */}
                <div className={`w-16 h-16 ${card.gradient ? `bg-gradient-to-br ${card.gradient} text-white` : ``} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {card.title}
                </h3>
                
                {Array.isArray(card.description) ? (
                  <ul className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc pl-5 space-y-1 text-sm">
                    {card.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {card.description}
                  </p>
                )}
                
                {/* Hover Effect Line */}
                {card.gradient ? (
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-500 group-hover:w-full w-0`}></div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your IOT Products?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Let's create a powerful  presence that drives your business forward
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start  Build Your Product
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;

