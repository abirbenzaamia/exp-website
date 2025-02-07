import React, { useEffect, useState } from 'react'
import SurveyComponent from '../components/SurveyComponent.jsx'
import {setPublisherWebsites} from '../utils/utils.js'


function Survey2() {
  //setUrls(setPublisherWebsites);




// get 3 random publisher websites 

  // Publisher RLS selection
  return (

    <div>
     <div className="min-h-screen bg-gray-50 items-center justify-center p-20 text-center ">
      <SurveyComponent step={2}></SurveyComponent>

      </div> 
        
    </div>
  )
}

export default Survey2