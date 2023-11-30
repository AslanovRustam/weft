import About from "./components/About/About";
import Alocation from "./components/Alocation/Alocation";
import Benefits from "./components/Benefits/Benefits";
import ContainerBG from "./components/ContainerBG/ContainerBG";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Ido from "./components/Ido/Ido";
import Manifesto from "./components/Manifesto/Manifesto";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics from "./components/Tokenomics/Tokenomics";

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
        </ContainerBG>
        <ContainerBG>
          <Benefits />
        </ContainerBG>
        <ContainerBG>
          <Roadmap />
        </ContainerBG>
        <ContainerBG>
          <Alocation />
        </ContainerBG>
        <ContainerBG>
          <Tokenomics />
        </ContainerBG>
        <ContainerBG>
          <Ido />
        </ContainerBG>
        <ContainerBG>
          <Faq />
        </ContainerBG>
      </main>
    </>
  );
}

export default App;
