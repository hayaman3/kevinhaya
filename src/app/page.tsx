import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Qualification from "./qualification/Qualification";

const sectionClass = "pt-24 pb-8 px-0 sm:pt-8 sm:pb-16 sm:px-0";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Home sectionClass={sectionClass} />
        <About sectionClass={sectionClass} />
        <Skills sectionClass={sectionClass} />
        <Qualification />
        <div className="min-h-[200vh] bg-zinc-100">Spacer for testing</div>
      </main>
    </>
  );
}
