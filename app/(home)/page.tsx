import Hobby from "./_components/Hobby";
import Hero from "./_components/Hero";
import { MarqueeQuotes } from "./_components/MarqueeQuotes";
import Outro from "./_components/Outro";
import Skills from "./_components/Skills";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-y-10 lg:mt-20 mt-12">
      <Hero />
      <MarqueeQuotes />
      <Hobby />
      <Skills />
      <Outro />
    </div>
  );
};

export default HomePage;
