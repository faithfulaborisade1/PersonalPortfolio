import "./app.scss"
import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {

  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section id="Portfolio">Services</section>
    <section id="">Portfolio1</section>
    <section id="">Portfolio2</section>
    <section id="">Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
