import { Helmet } from 'react-helmet-async'
import {
  Coursoul,
  Marquee,
  Timer,
  AboutPrograms,
  SchoolValuesBanner,
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
      <SchoolValuesBanner />
      <div className="relative z-20 -mt-24 rounded-t-[2rem] bg-white pt-10 shadow-2xl">
  <AboutPrograms />
</div>
      <Main1 />
    </>
  )
}

export default Home