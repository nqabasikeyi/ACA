import { Helmet } from "react-helmet-async";
import { Faculty, Main2 } from "../components";

function FacultyPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Faculty</title>
        <meta
          name="description"
          content="Meet our dedicated faculty at Amazon Christian Academy. Our educators are committed to holistic development and academic excellence."
        />
      </Helmet>

      <Faculty />
      <Main2 />
    </>
  );
}

export default FacultyPage;
