import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
        </Container>
      </main>
    </>
  );
}

export default App;
