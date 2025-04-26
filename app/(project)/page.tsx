import Layout from "../components/Layout"
import Hero from "../components/Hero"
import TourDates from "../components/TourDates"
// import VideoSection from "../components/VideoSection"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TourDates />
      {/* <VideoSection /> */}
    </Layout>
  );
}
