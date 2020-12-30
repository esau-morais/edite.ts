// Components (children)
import Banner from 'components/Banner';
import TopBar from 'components/TopBar';
import SectionOne from 'components/Sections/SectionOne';
import SectionTwo from 'components/Sections/SectionTwo';
import SectionThree from 'components/Sections/SectionThree';
import Footer from 'components/Footer';
import CustomerMessaging from 'components/CustomerMessaging';

function App() {
  return (
    <>
      <Banner />
      <TopBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
      <CustomerMessaging />
    </>
  );
}

export default App;
