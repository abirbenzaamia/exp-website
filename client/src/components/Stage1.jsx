import React, { useState } from "react";
import Survey from "./Survey";

const SurveyComponent = ({urls}) => {

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(0);

  // Survey data (questions for each step)
console.log(urls)
  const surveys = [
    {
      title: "Website 1",
      url: urls[0],
    },
    {
        title: "Website 2",
        url: urls[1],
      },
      {
        title: "Website 3",
        url: urls[2],
      },
  ];

  // Handler for the Submit button
  const handleNext = () => {
    if (currentStep < urls.length - 1) {
      //Send the reponse to the backend

      //Pass to the next
      setCurrentStep(currentStep + 1);
    } else {
       
     //Send the reponse to the backend

     // Redirect to the next stage

    }
  };

  return (
    <div className="text-center">
        <div className="container mx-auto w-1/2 text-left">

      <form>
        {console.log(currentStep)}
        {console.log(urls[currentStep])}
        <Survey data={ {url:urls[currentStep] , step:currentStep }}/>
      </form>

      </div>
      <button
        onClick={handleNext}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {currentStep < surveys.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default SurveyComponent;
