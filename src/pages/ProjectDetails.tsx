/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Readme from "./components/Readme";
import { getRepoDetails, getRepoReadme } from "../services/gitHubServices";
import { RiArrowLeftLine } from "react-icons/ri";

export default function ProjectDetails() {
  const { name } = useParams();
  const [repo, setRepo] = useState<any>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      try {
        const repoData = await getRepoDetails("Victor-als", name);
        setRepo(repoData);

        const readmeText = await getRepoReadme(
          "Victor-als",
          name,
          repoData.default_branch || "main"
        );
        if (readmeText) setReadme(readmeText);

        setTimeout(() => {
          setLoading(false);
        }, 1800);
      } catch (err) {
        console.error("Erro ao buscar projeto:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
        <p className="text-indigo-400 text-xl animate-pulse">Carregando projeto...</p>
      </div>
    );

  if (!repo)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
        <p className="text-white text-xl">Projeto não encontrado.</p>
      </div>
    );

  return (
    <main className="flex text-white flex-col items-center justify-center px-4 py-20 min-h-screen relative">
      <Link
        to={"/"}
        className="flex hover:text-slate-300 items-center gap-1 cursor-pointer absolute top-28 left-5 xl:top-40 xl:left-76"
      >
        <RiArrowLeftLine size={18} />
        Voltar
      </Link>

      <div className="w-full max-w-5xl xl:max-w-7xl space-y-8">
        <h1 className="text-4xl mt-16 font-bold text-white text-center">{repo.name}</h1>
        <p className="text-zinc-400 text-center">{repo.description}</p>

        {readme ? (
          <Readme markdown={readme} />
        ) : (
          <p className="text-zinc-400 text-center">README não disponível.</p>
        )}
      </div>
    </main>
  );
}
