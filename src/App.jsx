import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Mycertificate from "./component/mycertificate/Mycertificate";
import Skills from "./component/skills/Skills";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
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
