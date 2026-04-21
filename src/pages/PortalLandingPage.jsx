import { Helmet } from "react-helmet-async";
import PortalComingSoon  from "../portal/components/PortalComingSoon";

function PortalLandingPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Portal</title>
        <meta
          name="description"
          content="Access the student and faculty portal for resources, information, and more."
        />
      </Helmet>

      <PortalComingSoon />
    </>
  );
}

export default PortalLandingPage;
