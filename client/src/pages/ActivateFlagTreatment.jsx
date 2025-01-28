
import {setCookie, getCookie} from '../utils/utils'


export default function ActivateFlagTreatment() {


  


// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
 const handleSubmit = async e => {
  // const cookieString = document.cookie;
  //   const cookies = cookieString.split("; ");
  //   for (const cookie of cookies) {
  //     const [key, value] = cookie.split("=");
  //     if (key === '_fbp') {
  //       console.log('cookie _fbp found')
  //     }else{
  //       console.log('cookie _fbp not found')
  //     }
  //   }
// Check if the _fbp cookie exists; set it if missing
if (!document.cookie.includes("_fbp=")) {
  const fbCookieValue = `fb.${Date.now()}.${Math.floor(Math.random() * 10000000000)}`;
  document.cookie = `_fbp=${fbCookieValue}; path=/; max-age=31536000; SameSite=Lax; Secure`;
  console.log("First-party _fbp cookie set:", fbCookieValue);
}

// Load Facebook Pixel script
// eslint-disable-next-line no-unused-expressions
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n;
  n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js'));

// Initialize the Pixel
window.fbq('init', '322181517178287'); // Replace with your Pixel ID
window.fbq('track', 'PageView');



      };

return (
    // <form onSubmit={handleSubmit} >
      <div className="p-6 bg-white rounded-lg shadow-sm h-screen grid place-items-center">
        <div className=" pb-12 text-left max-w-4xl p-8 bg-white rounded shadow-lg ">

          <h1 className="text-2xl mt-5 font-bold text-gray-900">Follow these 2 steps</h1>
          <p className="mt-3 text-lg text-gray-600">
            In this section you will be required to activate The <a href="https://privacysandbox.com/intl/en_us/" className="text-blue-600/100">  Google Privacy Sanbdbox</a> as the pictures show<br /> <br />
            <strong>1. </strong>Please go to: <strong> chrome://flags/#test-third-party-cookie-phaseout</strong> to desactivate it and choose <strong>Disabled.</strong> <br /> <br />
            <strong>2. </strong>Please go to: <strong> chrome://flags/#tpc-phase-out-facilitated-testing </strong> to activate it and choose <strong>Enabled Force Treatment.</strong>
          </p>

          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          // type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save and continue
        </button>
      </div>
        </div>

      </div>

    // </form>
  )



}