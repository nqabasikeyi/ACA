import { Helmet } from "react-helmet-async";
import { About, Moto, SchoolValuesBanner} from "../components";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | About Us</title>
        <meta
          name="description"
          content="Discover Amazon Christian Academy's vision, mission, and values. Committed to holistic Christian education."
        />
      </Helmet>

      <About />
      <Moto />
      <SchoolValuesBanner />
    </>
  );
}

export default AboutPage;
