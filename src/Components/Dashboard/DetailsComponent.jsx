import React from "react";

const DetailsComponent = ({ details }) => {
  console.log(details)
  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-sky-700 mb-3 border-b pb-2">
        Details
      </h2>
      <div className="space-y-3">
        {details.map(({ label, value }, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md transition duration-200 hover:bg-sky-100"
          >
            <span className="font-semibold text-gray-700">{label}:</span>
            {label === "Resume" && value !== "Not Available" ? (
              <a
                href={value} // Link to the resume file
                download // Enable download
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Download Resume
              </a>
            ) : (
              <span className="text-gray-800">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsComponent;