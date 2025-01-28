import React from 'react'
import SurveyComponent from '../components/Stage1'



function Survey1() {

  const urls =['https://www.lemonde.fr/', 'https://www.lachainemeteo.com/', 'https://www.shecodes.io/'] 

  return (

    <div>
     <div className="min-h-screen bg-gray-50 items-center justify-center p-20 text-center ">
      <SurveyComponent urls={urls}></SurveyComponent>

      </div>
        
    </div>
  )
}

export default Survey1