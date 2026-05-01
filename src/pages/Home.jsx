import { Helmet } from 'react-helmet-async'
import {
  Coursoul,
  Marquee,
  Timer,
  AboutPrograms,
  Main1
} from '../components'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Amazon Christian Academy | Home</title>
        <meta
          name="description"
          content="Welcome to Amazon Christian Academy. Home of the Lions. Join us for our 5 year anniversary celebration."
        />
      </Helmet>

      <Coursoul />
      <Marquee text={`"Welcome to Amazon Christian Academy — where excellence thrives even in the winter season ❄️📚"`} />
      <Timer />
      <Marquee text={`"Second Term is underway — Excellence, discipline, and growth in every learner"`} />
      <AboutPrograms />
      <Main1 />
    </>
  )
}

export default Home