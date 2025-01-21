
import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const AdBlockDetector = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const detectAdBlock = async () => {
       // Detect ad blocker using a bait URL
    fetch("https://connect.facebook.net/en_US/fbevents.js", {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        console.log("Resource loaded successfully. No ad blocker detected.");
        setAdBlockDetected(false);
      
      })
      .catch(() => {
        console.log("Ad blocker detected.");
        setAdBlockDetected(true);
      // Disable all input fields
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
          input.setAttribute("disabled", "");
      });
      });
    };

    detectAdBlock();
  }, []);

  const handleAdBlock = () => {
    setAdBlockDetected(true); // Keep the user blocked
  };

  return (
    <Dialog open={adBlockDetected} onClose={handleAdBlock} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                
                  </DialogTitle>
                  <div>
                    <p className="text-sm text-gray-500">
                    You are currently using an <strong>Ad Blocker</strong>. Please consider desactivating it <strong>desactivating it</strong> and reload the page to continue to the study !
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AdBlockDetector;
