import Survey from "./Survey"


export default function Stage2Form() {

// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox

return (
    <form>
      <div className="container mx-auto w-1/2">
        <div className="border-b border-gray-900/10 pb-12 text-left max-w-4xl">

          <h2 className="text-base/7 mt-5 font-semibold text-gray-900">Stage 2</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            In this section you will be required to activate The <a className="ext-blue-600 underline hover:text-blue-800" href="https://privacysandbox.com/intl/en_us/"> Google's Privacy Sandbox. </a> <br />
            <strong>1. </strong>Please go to: <a className="ext-blue-600 underline hover:text-blue-800" href="chrome://flags/#test-third-party-cookie-phaseout">this link</a> to activate it and choose <strong>Enabled.</strong> <br />
            <strong>2. </strong>Please go to: <a className="ext-blue-600 underline hover:text-blue-800" href="chrome://flags/#tpc-phase-out-facilitated-testing">this link</a> to activate it and choose <strong>Enabled Force Treatment.</strong>
          </p>


          {/* Publisher website  */}
          <div className="pt-5">
          <h2 className="text-base/7 font-semibold text-gray-900 mb-5">Publisher websites</h2>

           {/* Publisher 1  */}
         <Survey></Survey>

          {/* Publisher 2  */}
          <Survey></Survey>




          {/* Publisher 3  */}
          <Survey></Survey>

        </div>
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
          Save
        </button>
      </div>
    </form>
  )



}