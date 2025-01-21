import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

const PrivacyNotice = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const [open, setOpen] = useState(true)
  const [accepted, setAccepted] = useState(false);

  // const handleAccept = () => {
  //   // Logic for accepting privacy notice
  //   console.log("Privacy notice accepted.");
  //   setIsOpen(false);
  // };

  // const handleDecline = () => {
  //   // Logic for declining privacy notice
  //   console.log("Privacy notice declined.");
  //   setIsOpen(true);
  // };
  
  const handleAccept = () => {
    setAccepted(true); // Grant access to the website
    localStorage.setItem("privacyAccepted", "true"); // Save consent in local storage
  };

  const handleDecline = () => {
    setAccepted(false); // Keep the user blocked
    alert("You should accept the Privacy Notice to continue the study. Otherwise, kindly exit the survey and return your submission on prolific");
  };

  // Check localStorage for existing consent
  React.useEffect(() => {
    const consentGiven = localStorage.getItem("privacyAccepted");
    if (consentGiven === "true") {
      setAccepted(true);
    }
  }, []);

  return (
    <>
      {!accepted ? (
         <Dialog open={!accepted} onClose={handleDecline} className="relative z-10">
         <DialogBackdrop
           //transition
           className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
         />

         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
             <DialogPanel
               transition
               className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
             >
               <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <h2 className="text-xl font-bold mb-4">Privacy Notice</h2>
            <h2 className="text-left font-bold"> Summary </h2>
            <div className="text-gray-700 mb-4">
              
            <p className="font-medium ">If you choose to participate in this study, you consent to the following privacy notice.</p>
           
                <p>
                We will collect the answers you provide in this form, in addition to your IP address, Prolific ID, and browser information (such as the use of ad-blocking software, browser type, and platform) and survey repsponses.
                This data is exclusively collected and utilized for the purposes of our study and will be deleted after the study's completion. 
                </p>
              
              <p> By choosing to participate in this study, you will be required to disable any ad-blocking extensions on your browser. Additionally, you may be shown retargeted advertisements as part of the study experience.</p>
              
              <p> You have the right to request the deletion and modification of the data we collect, by contacting us on Prolific, or on our <a className="text-blue-600 underline hover:text-blue-800" href="mailto:capi-survey@inria.fr">email address.</a>  </p>
              <p>The data controller is Gilles Schaeffer, director of the the Ecole Polytechnique Computer Science Laboratory (LIX), bâtiment Alan turiing, 1 rue honore d'Estienne d'Orves, 91120 PALAISEAU – FRANCE </p>
                <strong><em>Should you disagree with this notice, kindly exit the survey and return your submission on prolific.</em></strong>
                
            </div> 


            <h2 className="text-left font-bold"> Legal basis of processing </h2>
            <div className="text-gray-700 mb-4">
            <p> Personal data is collected on the basis of the public interest mission, a mission is defined by the amended decree of November 24, 1982, which outlines the organization and functioning of the CNRS, followed by the laboratories affiliated with the CNRS. </p> 
              
            </div>

            <h2 className="text-left font-bold"> Data Protection Officer </h2>
            <div className="text-gray-700 mb-4">
            <p>The Data Protection Officer of our research institution, <a className="text-blue-600 underline hover:text-blue-800" href="https://www.cnrs.fr/fr">CNRS</a>, can be contacted for any questions regarding the protection of personal data. The contact details are as follows: CNRS Service protection des données, 2 rue Jean Zay, 54519 Vandoeuvre-lès-Nancy ;
                mail : <a className="text-blue-600 underline hover:text-blue-800" href="mailto: dpd.demandes@cnrs.fr">dpd.demandes</a> </p> 
      
            </div>

            <h2 className="text-left font-bold"> Data Collection </h2>
            <div className="flex justify-center items-center text-center text-gray-700 mb-4">
  <ul className="list-disc list-inside text-left">
    <li ><strong>Internet Protocol address (IP address)</strong></li>
    <li> <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the study form. Depending on the device used, this device data may include information such as browser type, hardware model, operating system, and system configuration information.</li>
    <li> <strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. For this purpose, we use technologies to collect geolocation data that tells us your approximate location based on your IP address.</li>
    <li ><strong>Survey response</strong> we will collect your responses to the survey. The data collected may include demographic information such as age, gender and education level, links of ads you receive and your feedback.   </li>
      </ul>
    </div>
        

    <h2 className="text-left font-bold"> Data processsing </h2>
            <div className="text-gray-700 mb-4">
            <p> The data collected from your participation will be processed solely for statistical purposes (e.g., your perceptions towards advertisements, demographics, virtual private networks VPN or proxy use, ad block use, etc.). Your data will be aggregated and analyzed to identify trends, patterns, and insights. </p>
            </div>



            <h2 className="text-left font-bold"> Data records </h2>
            <div className="text-gray-700 mb-4">
            <p>We protect your personal information through a system of technical security measures: </p>
                  <ul> 
                    <li>We make use of our institution's organizational and technical processes and procedures to safely store and protect your personal information. Your data is stored safely on INRIA's infrastructure (one of our research institution) with <strong>restricted access</strong>: only our research team will have access to view, delete and modify your data. </li>
                    <li>The data we store is hashed with a <em>one way salted hash function</em> and no copy of the data will be stored elsewhere.</li>
                    <li>During the time we administer our experiment, we make sure to keep the website regularly maintained and secured. </li>
                  </ul>
            </div>


            <h2 className="text-left font-bold"> Data retention period </h2>
            <div className="text-gray-700 mb-4">
            <p> We will keep your personal information in our database only for the duration of our study (maximum of one year). 
                When our research study is done, we will delete your data records. </p>
      
            </div>


            <h2 className="text-left font-bold"> Personal rights </h2>
            <div className="text-gray-700 mb-4">
            <em> Rights to request deletion of the data </em>
                <p> Pursuant to the statutory and regulatory provisions applicable, in particular French Data Protection Law (Law no. 78-17 of 6 January) and Regulation (EU) no. 2016/679 of 27 April 2016 (applicable since 25 May 2018), you have the following rights:</p>
      
                  <ul>
                    <li> To exercise your right of access, to find out what personal data concerning you is held;  </li>
                    <li> To ask for your data to be updated, if they are incorrect; </li>
                    <li> To request the portability or erasure of your data;</li>
                    <li> To ask for the processing of your data to be limited; </li>
                    <li> To oppose the processing of your data, on legitimate grounds; </li>
      
                  </ul>
                <p> To exercise these rights, you can <a href="mailto: capi-survey@inria.fr">contact us</a> . If you have a complaint about how we handle your data, we would like to hear from you.</p>
      
                  <em> Rights to lodge a complaint </em>
                  <p> Right to lodge a complaint
                    If you consider, after contacting us, that your data protection rights have not been respected, you have the possibility of lodging a complaint with the CNIL online or by post. </p>
                                  
          </div>


            <h2 className="text-left font-bold"> Cookies and similar tracking technologies </h2>
            <div className="text-gray-700 mb-4">
            <em> What are cookies </em>
                <p> Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you.</p>
        
                <em> Third-party cookies </em>
                <p> With participant's consent, we will ask you to accept all cookies in webistes you will be redirected to.   </p>
      
                <em> Delete browser cookies </em>
                <p> You can delete all cookies already stored on your device by clearing the browsing history of your browser. This will remove all cookies from the sites you have visited.
                   To have more fine-grained control over cookies specific to different sites, refer to your browser's settings for privacy protection and cookies.</p>
                
                <em>Block all cookies</em>
                <p>Most modern browsers can be configured to prevent the storage of cookies on your device, but doing so may require you to indicate some of your preferences each time you visit a website/page. Additionally, certain services and features may not be available (such as logging in using a profile, for example). </p> 
                      
            </div>



            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-blue-700"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Accept
              </button>
              </div>
              </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>  ) : (
        <div>
          
        </div>
      )}
    </> 
  );
};

export default PrivacyNotice;
