import { useInView } from "../../hooks/useInView";
import { TechnologiesSection } from "./components/technologiesSection";

export default function SkillSection() {
  const { ref, isVisible } = useInView({ threshold: 0.2});

  return (
    <section id="skills" className="mt-20" ref={ref}>
      <h2
        className={`text-2xl font-semibold mb-14 text-indigo-700 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        ../habilidades
      </h2>

      <div className="border w-full border-gray-700/15 mb-16" />

      <div
        className={`flex flex-col lg:flex-row gap-16 transition-all duration-1100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="flex-1">
          <h2 className="text-neutral-200 font-semibold text-2xl mb-6">
            Experência e graduação
          </h2>

          <div
            className={`flex flex-col mt-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-neutral-300 text-xl font-semibold">
              2021 - 2023
            </span>
            <span className="text-indigo-600 text-lg">Formação em ADS</span>

            <p className="text-neutral-400 mt-6">
              Graduação focada em desenvolvimento de software, com ênfase em
              programação, banco de dados e desenvolvimento de sistemas web.
            </p>
          </div>

          <div
            className={`text-white flex flex-col mt-14 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-neutral-300 text-xl font-semibold">
              2022 - 2024
            </span>
            <span className="text-indigo-600 text-lg">
              Desenvolvedor Front-End - Indikatore supply chain
            </span>

            <p className="text-neutral-400 mt-6">
              Atuei na manutenção de um sistema legado, realizando correções de
              bugs e implementando novas funcionalidades conforme as demandas
              dos clientes. Contribuí para o desenvolvimento de uma nova
              plataforma utilizando React, TypeScript e MaterialUi focando na
              criação de páginas e na adaptação de recursos do sistema anterior.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-6 flex-nowrap">
          <h2 className="text-neutral-200 font-semibold text-2xl">
            Minhas habilidades
          </h2>

          <TechnologiesSection />

        </div>
      </div>
    </section>
  );
}
