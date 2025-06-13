import { useEffect, useState } from "react";
import perfil from "../../assets/computer.png";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { AiOutlineDownload } from "react-icons/ai";

export default function PrincipalSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-72 px-6 sm:px-12 xl:px-24 3xl:pr-24 py-12"
    >

      <div
        className={`transition-all duration-1000 mt-72 lg:mt-0 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        } flex-1`}
      >
        <h1 className="text-indigo-700 text-3xl sm:text-5xl font-bold">Olá, 👋🏻</h1>

        <div className="flex flex-col  gap-2">
          <span className="text-white text-2xl md:text-5xl font-bold typewriter">Meu nome é Victor</span>
          <span className="text-xl md:text-4xl font-bold text-white">Front-end Developer!</span>

          <p className="text-neutral-400 text-justify max-w-xl mt-4 text-base sm:text-lg">
            Sou desenvolvedor front-end com 3 anos de experiência criando interfaces modernas,
            responsivas e com foco na boa experiência do usuário. Busco sempre entregar projetos
            consistentes e bem estruturados.
          </p>

          <div className="flex gap-6 sm:gap-8 items-center mt-6 flex-wrap">
            <a href="/curriculo-victor.pdf" download>
              <button
                className="py-2 px-4 md:py-2 md:px-6 cursor-pointer hover:bg-indigo-700 
                flex items-center gap-3 text-neutral-300 transition bg-indigo-600 rounded-md text-sm md:text-base"
              >
                Download CV <AiOutlineDownload className="text-xl" />
              </button>
            </a>

            <a
              href="https://linkedin.com/in/victor-alves-577a031a4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialLinkedin className="text-white text-[1.6rem] md:text-[1.8rem] transition duration-400 hover:text-gray-400 hover:scale-110" />
            </a>

            <a
              href="https://github.com/Victor-als"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialGithub className="text-white text-[1.6rem] md:text-[1.8rem] transition duration-400 hover:text-gray-400 hover:scale-110" />
            </a>

            <a href="#">
              <PiWhatsappLogoLight className="text-white text-[1.8rem] md:text-4xl hover:text-gray-400 hover:scale-105 transition duration-400" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-1000 hidden xl:flex ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
        } justify-center flex-1`}
      >
        <img
          src={perfil}
          alt="Foto de perfil"
          className="xl:w-[30rem] object-cover"
        />
      </div>
    </section>
  );
}
