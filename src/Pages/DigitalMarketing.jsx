import React from "react";
import { useLocation } from "react-router-dom";
import WebDevelopment from "../Components/Development/WebDevelopment";
import WebDesign from "../Components/Development/WebDesign";
import SoftwareDevelopment from "../Components/Development/SoftwareDevelopment";
import AppDevelopment from "../Components/Development/AppDevelopment";
import CRMDevelopment from "../Components/Development/CRMDevelopment";
import WavyScrollText from "../Components/WavyScroll";
import Ads from "../Components/Digital Marketing/Ads";
import Marketing from "../Components/Digital Marketing/Marketing";
import SEO from "../Components/Digital Marketing/SEO";
import PPC from "../Components/Digital Marketing/PPC";
import GoogleAds from "../Components/Digital Marketing/GoogleAds";
import EmailM from "../Components/Digital Marketing/EmailM";

const Development = () => {
  // Extract query parameter
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title") || "Development";

  // Custom heading and image mapping
  const contentMap = {
    "Meta Ads": {
      title: "Maximize Your Business Reach and Drive Results with Powerful Meta Ads Campaign",
      image: "meta.svg",
      component: <Ads />
    },
    "Google Ads": {
      title: "Maximize Your Visibility, Conversions, and Growth with Strategic Google Ads Campaigns",
      image: "ads.svg",
      component: <GoogleAds />
    },
    "Email Marketing": {
      title: "Engage Your Audience, Nurture Leads, and Boost Conversions with Strategic Email Marketing",
      image: "email.svg",
      component: <EmailM />
    },
    "Content Marketing": {
      title: "Engage Your Audience, Build Trust, and Drive Conversions with Powerful Content Marketing Strategies",
      image: "content.svg",
      component: <Marketing />
    },
    "SEO SEM": {
      title: "Boost Your Online Presence with SEO & SEM Strategies",
      image: "seo.svg",
      component: <SEO />
    },
    "PPC": {
      title: "Drive Conversions with High-Performance PPC Campaigns",
      image: "demo.svg",
      component: <PPC />
    },
};

  // Get title and image based on selected category
  const headerTitle = contentMap[title]?.title || title;
  const imageSrc = contentMap[title]?.image || "/images/default.svg";
  const SelectedComponent = contentMap[title]?.component || null;

  // Split the title into two halves
  const words = headerTitle.split(" ");
  const halfIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfIndex).join(" ");
  const secondHalf = words.slice(halfIndex).join(" ");

    
  return (
    <div className="w-full h-auto">
      {/* Hero Section */}
      <div className="w-full grid md:grid-cols-2 gap-2 grid-cols-1 px-5 py-24">
        <div className="col-span-1 flex items-center">
        <WavyScrollText highlight={firstHalf} text={secondHalf} />
          
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-80 h-auto"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 p-5">
       
        {SelectedComponent}
      </div>

    </div>
  );
};

export default Development;
