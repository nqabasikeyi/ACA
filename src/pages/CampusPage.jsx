import { Helmet } from "react-helmet-async";
import { Campus, Main3 } from "../components";

function CampusPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Campus</title>
        <meta
          name="description"
          content="Discover our beautiful campus and facilities that provide a conducive environment for learning and growth."
        />
      </Helmet>

      <Campus />
      <Main3 />
    </>
  );
}

export default CampusPage;
