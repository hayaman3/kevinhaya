import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Qualification from "./qualification/Qualification";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <div className="min-h-[200vh] bg-zinc-100">Spacer for testing</div>
      </main>
    </>
  );
}
