import { Helmet } from "react-helmet-async";
import { StudentLifeGallery, Students } from "../components";

function StudentsPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Students</title>
        <meta
          name="description"
          content="Explore resources and updates for students at Amazon Christian Academy. Empowering learners for life."
        />
      </Helmet>

      <StudentLifeGallery />
      <Students />
    </>
  );
}

export default StudentsPage;
