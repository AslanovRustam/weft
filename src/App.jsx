import About from "./components/About/About";
import Container from "./components/Container/Container";
import ContainerBG from "./components/ContainerBG/ContainerBG";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Container> */}
        <Hero />
        {/* </Container> */}
        <ContainerBG>
          <About />
        </ContainerBG>
      </main>
    </>
  );
}

export default App;
