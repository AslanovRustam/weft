import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import ContainerBG from "./components/ContainerBG/ContainerBG";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Manifesto from "./components/Manifesto/Manifesto";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContainerBG>
          <About />
        </ContainerBG>
        <ContainerBG>
          <Features />
        </ContainerBG>
        <ContainerBG>
          <Manifesto />
        </ContainerBG>{" "}
        <ContainerBG>
          <Benefits />
        </ContainerBG>
      </main>
    </>
  );
}

export default App;
