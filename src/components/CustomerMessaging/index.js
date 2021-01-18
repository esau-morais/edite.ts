import MessengerCustomerChat from "react-messenger-customer-chat";

function CustomerMessaging() {
  return (
    <MessengerCustomerChat
      appId={process.env.REACT_APP_FB_APP_ID}
      pageId={process.env.REACT_APP_FB_PAGE_ID}
    />
  );
}

export default CustomerMessaging;
