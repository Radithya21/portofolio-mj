import Hero from "./components/hero";
import About from "./components/about";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}
