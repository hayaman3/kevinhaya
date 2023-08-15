import Header from "./header/xHeader";
import classNames from "classnames";

export default function Home() {
  const sectionClass = classNames(
    "pt-24",
    "pb-8",
    "px-0",
    "sm:pt-8",
    "sm:pb-16",
    "sm:px-0",
  );

  return (
    <>
      <Header />
      <main>
        {/* <Home className={} /> */}
        <div className="min-h-[200vh] bg-zinc-100">asd</div>
      </main>
    </>
  );
}
