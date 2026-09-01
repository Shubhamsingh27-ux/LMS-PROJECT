import CallToAction from "../../student/CallToAction";
import CoursesSection from "../../student/CoursesSection";
import Footer from "../../student/Footer";
import Hero from "../../student/Hero";
import TestimonialsSection from "../../student/TestimonialsSection";
import Companies from "../../student/companies";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
