import React from "react";
import Header from "./Component/header/Header";
import Nav from "./Component/nav/Nav";
import About from "./Component/about/About";
import Mycertificate from "./Component/mycertificate/Mycertificate";
import Skills from "./Component/skills/Skills";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/footer/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Mycertificate />
      <Contact />
      <Footer />
    </>
  );
};

export default App;