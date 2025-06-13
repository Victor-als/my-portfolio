import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import ParticlesComponent from "./components/ParticlesComponents";
import PrincipalSection from "./sections/principalSection/PrincipalSection";
import ProjectSection from "./sections/projectSection/ProjectSection";
import SkillSection from "./sections/skillsSectionn/SkillSection";
import ProjectDetails from "./pages/ProjectDetails";
import Blur from "./components/Blur";

function App() {
  return (
    <Router>
      <Header />


        <Blur />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <ParticlesComponent />
              <main className="relative z-20 w-full h-full xl:px-56 px-10 sm:px-20 md:px-44 scroll-smooth">
                <PrincipalSection />
                <SkillSection />
                <ProjectSection />
              </main>
            </>
          }
        />

        <Route path="/project/:name" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
