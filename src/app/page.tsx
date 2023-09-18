import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Qualification from "./qualification/Qualification";
import Contact from "./contact/Contact";
import Activity from "./activity/Activity";
import Footer from "./footer/Footer";
import Scrollup from "./scrollup/Scrollup";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        <Activity />
      </main>
      <Scrollup />
      <Footer />
    </>
  );
}
