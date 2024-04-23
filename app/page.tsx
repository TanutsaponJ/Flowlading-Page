import { AboutUs, Features, Hero } from "@/components";

const Home = () => {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <AboutUs />
    </main>
  );
};

export default Home;
