import { Helmet } from "react-helmet-async";
import { Curriculum, Main2 } from "../components";

function CurriculumPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Curriculum</title>
        <meta
          name="description"
          content="Learn about the academic curriculum at Amazon Christian Academy, designed to inspire excellence and character formation."
        />
      </Helmet>

      <Curriculum />
      <Main2 />
    </>
  );
}

export default CurriculumPage;
