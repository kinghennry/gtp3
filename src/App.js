import {
  Header,
  WhatGPT3,
  Footer,
  Blog,
  Features,
  Possibility,
} from "./container";
import "./App.css";
import { Navbar, Brand, CTA } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
