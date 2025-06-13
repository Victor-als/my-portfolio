import { Link } from "react-scroll";
import logoBranco from "../assets/logo-branco.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const location = useLocation();
  const isProjectDetails = location.pathname.startsWith("/project/");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Se sair da home e for pra uma rota de detalhe ou outra, reseta pra 'home'
    if (location.pathname !== "/") {
      setActiveSection("home");
    }
  }, [location.pathname]);

  return (
    <header
      className="flex items-center justify-around xl:justify-between py-5 xl:px-72  
      fixed backdrop-filter border-2 border-slate-600/10 backdrop-blur-sm bg-clip-padding 
      bg-opacity-05 z-30 h-20 w-full"
    >
      <div>
        <img src={logoBranco} alt="logo" className="w-28 h-20" />
      </div>

      {!isProjectDetails && (
        <nav className="flex items-center gap-6 xl:gap-10 xl:pr-36 pr-10">
          <Link
            to="home"
            smooth={true}
            duration={600}
            onClick={() => setActiveSection("home")}
            className={`font-semibold transition cursor-pointer ${
              activeSection === "home"
                ? "text-violet-400 border-b border-violet-400"
                : "text-gray-300 hover:text-violet-400 hover:border-b"
            }`}
          >
            Início
          </Link>

          <Link
            to="skills"
            smooth={true}
            offset={-140}
            duration={600}
            onClick={() => setActiveSection("skills")}
            className={`font-semibold transition cursor-pointer ${
              activeSection === "skills"
                ? "text-violet-400 border-b border-violet-400"
                : "text-gray-300 hover:text-violet-400 hover:border-b"
            }`}
          >
            Habilidades
          </Link>

          <Link
            to="projects"
            smooth={true}
            offset={-140}
            duration={600}
            onClick={() => setActiveSection("projects")}
            className={`font-semibold transition cursor-pointer ${
              activeSection === "projects"
                ? "text-violet-400 border-b border-violet-400"
                : "text-gray-300 hover:text-violet-400 hover:border-b"
            }`}
          >
            Projetos
          </Link>
        </nav>
      )}
    </header>
  );
}
