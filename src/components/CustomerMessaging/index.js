import { useEffect } from 'react';

function CustomerMessaging() {
  useEffect(() => {
    const fbScript = document.createElement('script');

    fbScript.src = 'https://connect.facebook.net/ en_US/sdk/xfbml.customerchat.js';
    fbScript.async = true;
    // Add script to the DOM
    document.body.appendChild(fbScript);
    // Clean up
    return () => document.body.removeChild(fbScript);
  }, [])

  return (
    <div
      className="fb-customerchat"
      // attribution=setup_tool
      page_id="105389231495977"
      theme_color="#116df7"
      logged_in_greeting="Hi 👋 It's Esaú here, the Edite's creator. How can I help you?"
      logged_out_greeting="Hi 👋 It's Esaú here, the Edite's creator. How can I help you?"
    />
  )
}

export default CustomerMessaging;
