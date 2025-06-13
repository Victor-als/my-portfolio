import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import ProjectCard from "./components/ProjectCard";
import { useInView } from "../../hooks/useInView";

export default function ProjectsSection() {
  const { repos, loading } = useGitHubRepos("Victor-als");
  const { ref, isVisible } = useInView({ threshold: 0.70 });

  if (loading) return <p>Carregando...</p>;

  return (
    <section id="projects" className="text-white mt-40">

      <h2
        ref={ref}
        className={`text-2xl font-semibold mb-14 text-indigo-700 transition-all duration-900 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        ../meus-projetos
      </h2>

      <div className="border w-full border-gray-700/15" />
      <div className="flex flex-wrap justify-center gap-16 mt-20">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            htmlUrl={repo.html_url}
            image={repo.image}
            languages={repo.languages}
          />
        ))}
      </div>
    </section>
  );
}
