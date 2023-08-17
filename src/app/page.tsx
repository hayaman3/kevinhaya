import Header from "./header/xHeader";
import Home from "./home/Home";

export default function Main() {
  const sectionClass = "pt-24 pb-8 px-0 sm:pt-8 sm:pb-16 sm:px-0";

  return (
    <>
      <Header />
      <main>
        <Home sectionClass={sectionClass} />
        <div className="min-h-[200vh] bg-zinc-100">asd</div>
      </main>
    </>
  );
}
