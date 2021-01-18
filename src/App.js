// Components (children)
import Banner from "components/Banner";
import CustomerMessaging from "components/CustomerMessaging";
import Footer from "components/Footer";
import SectionFour from "components/Sections/SectionFour";
import SectionOne from "components/Sections/SectionOne";
import SectionThree from "components/Sections/SectionThree";
import SectionTwo from "components/Sections/SectionTwo";
import TopBar from "components/TopBar";

function App() {
  return (
    <>
      <Banner />
      <TopBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
      <CustomerMessaging />
    </>
  );
}

export default App;
