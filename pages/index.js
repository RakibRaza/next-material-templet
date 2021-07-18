import Header from '../components/Header/Header';
import Service from '../components/Service/Service';
import Process from '../components/Process/Process';
import Skills from '../components/Skills/Skills';
import Business from '../components/Business/Business';
import About from '../components/About/About';
import Review from '../components/Review/Review';
import Subscribe from '../components/Subscribe/Subscribe';
import Pricing from '../components/Pricing/Pricing';
import Contact from '../components/Contact/Contact';

import reviews from '../assets/data/review'
import skills from '../assets/data/skills'
import pricing from '../assets/data/pricing'

export default function Home({ reviews, skills, pricing }) {
  return (
    <>
      <Header />
      <Service />
      <Process />
      <Skills skills={skills} />
      <Business />
      <About />
      <Review reviews={reviews} />
      <Subscribe />
      <Pricing pricing={pricing} />
      <Contact />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { reviews, skills, pricing },
  }
}