import About from "./components/About/About";
import Alocation from "./components/Alocation/Alocation";
import Benefits from "./components/Benefits/Benefits";
import Contacts from "./components/Contacts/Contacts";
import ContainerBG from "./components/ContainerBG/ContainerBG";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Ido from "./components/Ido/Ido";
import Manifesto from "./components/Manifesto/Manifesto";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal} />
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
        <ContainerBG>
          <Contacts />
        </ContainerBG>
        <Footer />
        <Menu onClose={togleModal} showModal={showModal} />
      </main>
    </>
  );
}

export default App;
