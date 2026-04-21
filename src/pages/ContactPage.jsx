import { Helmet } from "react-helmet-async";
import { Contact } from "../components";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Contact</title>
        <meta
          name="description"
          content="Get in touch with Amazon Christian Academy. Reach out for inquiries, admissions, and more."
        />
      </Helmet>

      <Contact />
    </>
  );
}

export default ContactPage;
