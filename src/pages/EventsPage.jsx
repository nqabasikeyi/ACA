import { Helmet } from "react-helmet-async";
import { Events} from "../components";

function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Events</title>
        <meta
          name="description"
          content="Stay updated with the latest events, programs, and activities happening at Amazon Christian Academy."
        />
      </Helmet>

      <Events />
    </>
  );
}

export default EventsPage;
