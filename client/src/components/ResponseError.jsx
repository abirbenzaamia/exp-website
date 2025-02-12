import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


export default function ResponseError ({responseError, setResponseError}) {
  const [open, setOpen] = useState(true)
  console.log("hahahahah")
  // const updateResponseError = () => {
  //   setResponseError(false)
  // };
  return (
    <Dialog open={responseError} onClose={setResponseError} className="relative z-10">

<DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
    />

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Please make sure you answer all questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          < div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            
          
              <button
                type="button"
                onClick={() => setResponseError(false)}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                OK
              </button>
              
            
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  );
};

