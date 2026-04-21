import { Route, Routes } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { PuffZero } from "@/pages/projects/PuffZero";
import { BioHub } from "@/pages/projects/BioHub";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/puffzero" element={<PuffZero />} />
        <Route path="/projects/biohub" element={<BioHub />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
