

import {setCookie} from '../utils/utils'

export default function ActivateFlagC1() {

    const handleSubmit = async e => {
        
      try{
        setCookie("OPT_OUT", 1, 7)
      }
      catch{
        alert('You did not activate the flag as mentioned')
      }
      
      };
    
    // The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
    
    return (
        <form onSubmit={handleSubmit} >
          <div className="container mx-auto w-1/2">
            <div className="border-b border-gray-900/10 pb-12 text-left max-w-4xl">
    
              <h2 className="text-base/7 mt-5 font-semibold text-gray-900">Stage 1</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                In this section you will be required to activate third-party tracking cookies. <br />
                <strong>1. </strong>Please go to: <strong> chrome://flags/#test-third-party-cookie-phaseout</strong> to desactivate it and choose <strong>Disabled.</strong> <br />
                <strong>2. </strong>Please go to: <strong> chrome://flags/#tpc-phase-out-facilitated-testing </strong> to activate it and choose <strong>Enabled Force Control 1.</strong>
              </p>
    
    
            </div>
    
          </div>
    
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Done
            </button>
          </div>
        </form>
      )
    
    
    
    }